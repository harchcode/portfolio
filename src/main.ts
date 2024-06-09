import { initBackground, resetCtx } from "./background";
import { initLightDarkMode, isDarkTheme } from "./lightdarkmode";
import { initMenuScrolling, setToInitialPageScroll } from "./nav";

function main() {
  initBackground();
  initLightDarkMode(mode => resetCtx(mode));
  // initMenuScrolling();
  // resetCtx(isDarkTheme() ? "dark" : "light");

  // setToInitialPageScroll();
}

main();
