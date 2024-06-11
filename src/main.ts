import { initBackground, resetCtx } from "./background";
import { initLightDarkMode } from "./lightdarkmode";

function main() {
  initBackground();
  initLightDarkMode(mode => resetCtx(mode));
}

main();
