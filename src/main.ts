import { initBackground } from "./background";
import { initMenuScrolling, setToInitialPageScroll } from "./nav";

function main() {
  initMenuScrolling();
  initBackground();

  setToInitialPageScroll();
}

main();
