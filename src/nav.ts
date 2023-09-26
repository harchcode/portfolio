import { addScrollEventListener, tween } from "./utils";

let shouldHandleScroll = true;
let menuAnchors: NodeListOf<HTMLAnchorElement> | undefined = undefined;
const menuAnchorMap: Record<string, HTMLElement> = {};
const menuDivs: HTMLElement[] = [];
const menuDivMap: Record<string, HTMLElement> = {};

const ACTIVE_MENU_CLASS = "active";

function setActiveMenu(id: string) {
  if (!menuAnchors) return;

  for (const anchor of menuAnchors) {
    anchor.classList.remove(ACTIVE_MENU_CLASS);
  }

  menuAnchorMap[id].classList.add(ACTIVE_MENU_CLASS);
}

function windowScrollY(to: number) {
  window.scrollTo(window.scrollX, to);
}

export function initMenuScrolling() {
  menuAnchors = document.querySelectorAll(
    'a[href^="#"]'
  ) as NodeListOf<HTMLAnchorElement>;

  for (const anchor of menuAnchors) {
    const href = anchor.getAttribute("href");
    if (!href) continue;

    const id = href.substring(1);

    menuAnchorMap[id] = anchor;

    const div = document.getElementById(id);
    if (!div) continue;

    menuDivs.push(div);
    menuDivMap[id] = div;

    anchor.addEventListener("click", async function (e) {
      e.preventDefault();

      if (!shouldHandleScroll) return;

      shouldHandleScroll = false;
      setActiveMenu(id);

      await tween(window.scrollY, div.offsetTop, 1000, windowScrollY);

      shouldHandleScroll = true;
    });
  }

  function getActiveMenuId(scrollPos: number): string | null {
    for (let i = menuDivs.length - 1; i >= 0; i--) {
      const menuDiv = menuDivs[i];

      if (scrollPos >= menuDiv.offsetTop - 100) {
        return menuDiv.id;
      }
    }

    return null;
  }

  function onScroll(_scrollX: number, scrollY: number) {
    if (!shouldHandleScroll) return;

    const id = getActiveMenuId(scrollY);

    setActiveMenu(id ?? menuDivs[0].id);
  }

  addScrollEventListener(onScroll);
}

export async function setToInitialPageScroll() {
  const id = window.location.hash
    ? window.location.hash.substring(1)
    : undefined;

  if (!menuAnchors || menuAnchors.length <= 0) return;

  if (!id || !menuDivMap[id]) {
    const href = menuAnchors[0].getAttribute("href");
    if (!href) return;

    const id = href.substring(1);
    setActiveMenu(id);

    return;
  }

  const menuDiv = menuDivMap[id];

  if (
    window.scrollY >= menuDiv.offsetTop &&
    window.scrollY < menuDiv.offsetTop + menuDiv.scrollHeight
  ) {
    return;
  }

  setActiveMenu(id);

  shouldHandleScroll = false;

  await tween(window.scrollY, menuDiv.offsetTop, 1000, windowScrollY);

  shouldHandleScroll = true;
}
