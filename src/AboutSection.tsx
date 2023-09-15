import siteInfo from "./site-info";

export function AboutSection() {
  return (
    <div
      id="about"
      class="px-4 py-16 max-w-screen-lg min-h-screen mx-auto flex flex-col items-center justify-center"
    >
      <div class="w-full flex-auto md:flex-none flex flex-col md:flex-row items-center justify-center">
        <div class="w-full max-w-md md:w-72 lg:w-80 flex-none">
          <img
            src={siteInfo.photoUrl}
            width="100%"
            height="100%"
            style="filter: drop-shadow(0 0 2px #666)"
          />
        </div>
        <div
          class="bg-white px-6 py-4 flex-auto relative rounded-xl tracking-wider talkbubble"
          style="filter: drop-shadow(0 0 2px #ccc)"
        >
          <div class="text-2xl md:text-5xl">Hi, I am</div>
          <div class="text-2xl md:text-5xl md:mt-2 typewriter">
            <span class="border-r-4">Hartono Chandra</span>
          </div>
          <div class="mt-2 md:mt-8 font-bold md:text-xl text-gray-800">
            Software Engineer - Web
          </div>
          <div class="mt-2 md:mt-8 md:text-lg">
            I am just your average software engineer, specialized in web.
            Nothing special about me, I just happen to have a job as a web
            engineer, and can do my job as expected like everyone else.
          </div>
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
