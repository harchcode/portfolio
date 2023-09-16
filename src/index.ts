import {
  removeElement,
  removeElementById,
  transitionIn,
  transitionOut
} from "./gaguna";
import { wait } from "./gaguna/misc";
import { render } from "solid-js/web";
import { MainPage } from "./MainPage";
import { setToInitialPageScroll } from "./Navbar";
import { initBackground } from "./background";

async function main() {
  if (!("timeStart" in window) || typeof window.timeStart !== "number") return;

  const loadingDiv = document.getElementById("loading-div");
  if (!loadingDiv) return;

  const startTime = window.timeStart;

  await import("./style.css");

  const root = document.createElement("div");
  root.className = "w-full min-h-full";
  root.style.display = "none";
  root.style.opacity = "0";
  document.body.appendChild(root);

  render(MainPage, root);

  //=================================
  // Wait until all images are loaded
  //=================================
  const imgElements = root.getElementsByTagName("img");
  const imgLoadPromises: Promise<void>[] = [];

  for (const imgEl of imgElements) {
    if (!imgEl.src) continue;

    const promise = new Promise<void>(resolve => {
      imgEl.onload = () => resolve();
    });

    imgLoadPromises.push(promise);
  }

  await Promise.all(imgLoadPromises);
  //=================================

  initBackground();

  console.log("done");

  const endTime = Date.now();
  const elapsed = endTime - startTime;

  if (elapsed < 1000) {
    await wait(1000 - elapsed);
  }

  removeElementById("initialization-script");

  await transitionOut(loadingDiv);

  removeElement(loadingDiv);
  removeElementById("loading-style");

  root.style.display = "block";

  await transitionIn(root);

  setToInitialPageScroll();
}

main();
