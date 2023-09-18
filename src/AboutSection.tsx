import siteInfo from "./site-info";

export function AboutSection() {
  return (
    <div
      id="about"
      class="px-4 py-16 max-w-screen-lg min-h-screen mx-auto flex flex-col items-center justify-center"
    >
      <div class="w-full flex-auto md:flex-none flex flex-col md:flex-row items-center justify-center">
        <div class="w-full max-w-md md:w-80 lg:w-96 flex-none">
          <img
            src={siteInfo.about.imageSrc}
            alt="Profile picture"
            width="100%"
            height="100%"
            style="filter: drop-shadow(0 0 1px black)"
          />
        </div>
        <div
          class="bg-white px-6 py-4 flex-auto relative rounded-xl tracking-wider talkbubble drop-shadow-sm"
          style="filter: drop-shadow(0 0 1px black)"
        >
          <div class="text-2xl md:text-5xl">Hi&#10071; I am</div>
          <div class="text-2xl md:text-5xl md:mt-2 tracking-normal typewriter">
            <span class="border-r-4">{siteInfo.about.name}</span>
          </div>
          <div class="mt-2 md:mt-8 font-bold md:text-xl text-gray-800">
            {siteInfo.about.jobTitle}
          </div>
          <div class="mt-2 md:mt-8 md:text-lg">{siteInfo.about.intro}</div>
        </div>
      </div>
      <div class="flex space-x-4 mt-8 md:mt-16">
        {siteInfo.socialLinks.map(link => (
          <a
            href={link.url}
            aria-label={link.label}
            class="social-button w-12 h-12 p-3 md:w-16 md:h-16 md:p-4 bg-white border-2 border-black shadow rounded-full overflow-hidden"
          >
            <svg width="100%" height="100%" version="2.0">
              <use href={`#${link.svgSymbolId}`} />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
}
