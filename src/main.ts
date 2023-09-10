import {
  createElementFromHTML,
  removeElement,
  removeElementById,
  transitionOut
} from "./gaguna";
import { wait } from "./gaguna/misc";
import profileSrc from "./assets/profile.svg";
import { loadImage } from "./gaguna/loader";

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

  const endTime = Date.now();
  const elapsed = endTime - startTime;

  if (elapsed < 1000) {
    await wait(1000 - elapsed);
  }

  removeElementById("initialization-script");

  await transitionOut(loadingDiv);

  removeElement(loadingDiv);
  removeElementById("loading-style");

  document.body.appendChild(contentElement);
}

main();
