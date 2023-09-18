import { createSignal } from "solid-js";
import { easeInOutQuad, tween } from "./gaguna";

const [activeId, setActiveId] = createSignal("about");

let shouldHandleScroll = true;
let menuAnchors: NodeListOf<HTMLAnchorElement> | undefined = undefined;
const menuAnchorMap: Record<string, HTMLElement> = {};
const menuDivs: HTMLElement[] = [];
const menuDivMap: Record<string, HTMLElement> = {};

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
      setActiveId(id);

      await tween(
        window.scrollY,
        div.offsetTop,
        1000,
        windowScrollY,
        easeInOutQuad
      );

      shouldHandleScroll = true;
    });
  }

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

  function onScroll(scrollPos: number) {
    if (!shouldHandleScroll) return;

    const id = getActiveMenuId(scrollPos);

    setActiveId(id);
  }

  function handleScroll() {
    onScroll(lastKnownScrollPosition);
    ticking = false;
  }

  window.addEventListener("scroll", () => {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(handleScroll);

      ticking = true;
    }
  });
}

export async function setToInitialPageScroll() {
  const id = window.location.hash
    ? window.location.hash.substring(1)
    : undefined;

  if (!id || !menuDivMap[id]) {
    return;
  }

  const menuDiv = menuDivMap[id];

  if (
    window.scrollY >= menuDiv.offsetTop &&
    window.scrollY < menuDiv.offsetTop + menuDiv.scrollHeight
  ) {
    return;
  }

  setActiveId(id);

  shouldHandleScroll = false;

  await tween(window.scrollY, menuDiv.offsetTop, 1000, windowScrollY);

  shouldHandleScroll = true;
}

function MenuLink(props: { children: string; href: string; active?: boolean }) {
  return (
    <a
      href={props.href}
      class={`block text-black ${
        props.active ? "bg-indigo-600 font-bold text-white" : "bg-indigo-100"
      } px-2 py-1 border-2 border-black rounded-full w-20 text-center`}
    >
      {props.children}
    </a>
  );
}

function Divider() {
  return <div class="w-8 border-t border-b border-black"></div>;
}

export function NavBar() {
  return (
    <div class="fixed w-full z-20 backdrop-blur-sm shadow">
      <div class="w-full max-w-screen-lg mx-auto px-4 py-2">
        <div class="flex items-center justify-center md:justify-normal">
          <MenuLink href="#about" active={activeId() === "about"}>
            About
          </MenuLink>
          <Divider />
          <MenuLink href="#work" active={activeId() === "work"}>
            Works
          </MenuLink>
          <Divider />
          <MenuLink href="#project" active={activeId() === "project"}>
            Projects
          </MenuLink>
        </div>
      </div>
    </div>
  );
}
