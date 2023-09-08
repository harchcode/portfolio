import { transitionIn, transitionOut } from "./gaguna";
import { wait } from "./gaguna/misc";

async function main() {
  const startTime = Date.now();

  const loadingDiv = document.getElementById("loading-div");
  if (!loadingDiv) return;

  await transitionIn(loadingDiv);

  await import("./style.css");

  const endTime = Date.now();
  const elapsed = endTime - startTime;

  if (elapsed < 1000) {
    await wait(1000 - elapsed);
  }

  await transitionOut(loadingDiv);

  loadingDiv.parentNode?.removeChild(loadingDiv);
  const loadingStyle = document.getElementById("loading-style");
  loadingStyle?.parentNode?.removeChild(loadingStyle);
}

main();
