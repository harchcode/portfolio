// import { loadImage } from "./gaguna/loader";
// import profileSrc from "./assets/profile.svg";

// export async function loadImages() {
//   const imgEl = await loadImage(profileSrc);
//   console.log(imgEl);
// }

let assetUrls: Record<string, string> = {};

export async function loadUrls() {
  assetUrls = {};

  const files = import.meta.glob("./assets/*.*");

  for (const path in files) {
    const mod = (await files[path]()) as { default: string };

    console.log(path);

    assetUrls[path.substring(9)] = mod.default;
  }
}

export function getAssetUrl(assetId: string) {
  return assetUrls[assetId];
}
