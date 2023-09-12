import {
  createElementFromHTML,
  removeElement,
  removeElementById,
  transitionOut
} from "./gaguna";
import { wait } from "./gaguna/misc";
import profileSrc from "./assets/profile.svg";
import { loadImage } from "./gaguna/loader";
import siteInfo from "./site-info";

async function main() {
  if (!("timeStart" in window) || typeof window.timeStart !== "number") return;

  const loadingDiv = document.getElementById("loading-div");
  if (!loadingDiv) return;

  const startTime = window.timeStart;

  await import("./style.css");
  const contentHTML = (await import("./main.html?raw")).default;
  const contentElement = createElementFromHTML(contentHTML);

  const imgEl = await loadImage(profileSrc);
  console.log(imgEl);

  const svgDefEls = siteInfo.svgDefs.map(svgDef => {
    const el = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    el.style.display = "none";
    el.setAttribute("version", "2.0");

    el.innerHTML = `<defs>
        <symbol id="${svgDef.id}" viewbox="${svgDef.viewBox}">
          <path fill="#000" d="${svgDef.path}"></path>
        </symbol>
      </defs>
      <use href="#${svgDef.id}"></use>`;

    return el;
  });

  const socialButton =
    contentElement.getElementsByClassName("social-button")[0];

  siteInfo.socialLinks.forEach((socialLink, i) => {
    const el =
      i === 0 ? socialButton : (socialButton.cloneNode(true) as HTMLElement);

    el.setAttribute("href", socialLink.url);
    el.setAttribute("aria-label", socialLink.label);

    const useEl = el.getElementsByTagName("use")[0];
    useEl.setAttribute("href", `#${socialLink.svgSymbolId}`);

    if (i > 0) {
      socialButton.parentNode?.appendChild(el);
    }
  });

  const endTime = Date.now();
  const elapsed = endTime - startTime;

  if (elapsed < 1000) {
    await wait(1000 - elapsed);
  }

  removeElementById("initialization-script");

  await transitionOut(loadingDiv);

  removeElement(loadingDiv);
  removeElementById("loading-style");

  for (const svgDefEl of svgDefEls) {
    document.body.appendChild(svgDefEl);
  }

  document.body.appendChild(contentElement);
}

main();
