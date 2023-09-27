import { initLightDarkMode } from "./lightdarkmode";
import { initMenuScrolling, setToInitialPageScroll } from "./nav";

function main() {
  initLightDarkMode();
  initMenuScrolling();

  setToInitialPageScroll();
}

main();
