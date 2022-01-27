import { drawBackground, initBackground } from "./background";
import { tween } from "./utils";

const menuAnchors: HTMLElement[] = [];
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  menuAnchors.push(anchor as HTMLElement);
});

const menuAnchorMap: Record<string, HTMLElement> = {};
const menuDivs: HTMLElement[] = [];
const menuDivMap: Record<string, HTMLElement> = {};

const ACTIVE_MENU_CLASS = "active";

function windowScrollY(to: number) {
  window.scrollTo(window.scrollX, to);
}

menuAnchors.forEach(anchor => {
  const href = anchor.getAttribute("href");
  const id = href.substr(1);

  menuAnchorMap[id] = anchor;

  const div = document.getElementById(id);
  menuDivs.push(div);
  menuDivMap[id] = div;

  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    tween(window.scrollY, div.offsetTop, 1000, windowScrollY);
  });
});

let lastKnownScrollPosition = 0;
let ticking = false;

function getActiveMenuId(scrollPos: number): string {
  for (let i = menuDivs.length - 1; i >= 0; i--) {
    const menuDiv = menuDivs[i] as HTMLElement;

    if (scrollPos >= menuDiv.offsetTop - 300) {
      return menuDiv.id;
    }
  }

  return "";
}

function setActiveMenu(id: string) {
  for (const anchor of menuAnchors) {
    anchor.classList.remove(ACTIVE_MENU_CLASS);
  }

  menuAnchorMap[id].classList.add(ACTIVE_MENU_CLASS);
}

function doSomething(scrollPos: number) {
  setActiveMenu(getActiveMenuId(scrollPos));

  const progress = document.body.scrollHeight - window.innerHeight;

  drawBackground(scrollPos / progress);
}

window.addEventListener("scroll", () => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function () {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});

function initPage() {
  const tmp = window.location.hash ? window.location.hash.substr(1) : "about";

  setActiveMenu(tmp);

  setTimeout(() => {
    menuDivMap[tmp].scrollIntoView();
  });
}

initPage();
initBackground();
