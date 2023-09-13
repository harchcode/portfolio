import {
  removeElement,
  removeElementById,
  transitionIn,
  transitionOut
} from "./gaguna";
import { wait } from "./gaguna/misc";
import profileSrc from "./assets/profile.svg";
import { loadImage } from "./gaguna/loader";
import { render } from "solid-js/web";
import { MainPage } from "./MainPage";

async function main() {
  if (!("timeStart" in window) || typeof window.timeStart !== "number") return;

  const loadingDiv = document.getElementById("loading-div");
  if (!loadingDiv) return;

  const startTime = window.timeStart;

  await import("./style.css");

  const imgEl = await loadImage(profileSrc);
  console.log(imgEl);

  const endTime = Date.now();
  const elapsed = endTime - startTime;

  if (elapsed < 1000) {
    await wait(1000 - elapsed);
  }

  removeElementById("initialization-script");

  const root = document.createElement("div");
  root.className = "w-full min-h-full bg-lime-50";
  root.style.display = "none";
  root.style.opacity = "0";
  document.body.appendChild(root);

  render(MainPage, root);

  await transitionOut(loadingDiv);

  removeElement(loadingDiv);
  removeElementById("loading-style");

  root.style.display = "block";

  await transitionIn(root);
}

main();
