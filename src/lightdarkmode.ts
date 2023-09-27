const systemModeButton = document.getElementById(
  "system-mode-button"
) as HTMLButtonElement;

const lightModeButton = document.getElementById(
  "light-mode-button"
) as HTMLButtonElement;

const darkModeButton = document.getElementById(
  "dark-mode-button"
) as HTMLButtonElement;

function clearSelectedTheme() {
  systemModeButton.classList.remove("active");
  lightModeButton.classList.remove("active");
  darkModeButton.classList.remove("active");
}

function initSelectedTheme() {
  clearSelectedTheme();

  if (!localStorage.theme) {
    systemModeButton.classList.add("active");
  } else if (localStorage.theme === "light") {
    lightModeButton.classList.add("active");
  } else if (localStorage.theme === "dark") {
    darkModeButton.classList.add("active");
  }
}

// function isDarkTheme() {
//   return (
//     localStorage.theme === "dark" ||
//     (!("theme" in localStorage) &&
//       window.matchMedia("(prefers-color-scheme: dark)").matches)
//   );
// }

export function initLightDarkMode() {
  initSelectedTheme();

  systemModeButton.addEventListener("click", () => {
    localStorage.removeItem("theme");

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    clearSelectedTheme();
    systemModeButton.classList.add("active");
  });

  lightModeButton.addEventListener("click", () => {
    localStorage.theme = "light";
    document.documentElement.classList.remove("dark");

    clearSelectedTheme();
    lightModeButton.classList.add("active");
  });

  darkModeButton.addEventListener("click", () => {
    localStorage.theme = "dark";
    document.documentElement.classList.add("dark");

    clearSelectedTheme();
    darkModeButton.classList.add("active");
  });
}
