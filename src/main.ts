import { removeElement, removeElementById, transitionOut } from "./gaguna";
import { wait } from "./gaguna/misc";

async function main() {
  if (!("timeStart" in window) || typeof window.timeStart !== "number") return;

  const startTime = window.timeStart;
  console.log(startTime);

  const loadingDiv = document.getElementById("loading-div");
  if (!loadingDiv) return;

  await import("./style.css");

  const endTime = Date.now();
  const elapsed = endTime - startTime;

  if (elapsed < 1000) {
    await wait(1000 - elapsed);
  }

  removeElementById("initialization-script");

  await transitionOut(loadingDiv);

  removeElement(loadingDiv);
  removeElementById("loading-style");
}

main();
