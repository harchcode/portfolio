import siteInfo from "./site-info";

export function MainPage() {
  return (
    <>
      {siteInfo.svgDefs.map(svgDef => (
        <svg style="display: none" version="2.0">
          <defs>
            <symbol id={svgDef.id} viewBox={svgDef.viewBox}>
              <path fill="#000" d={svgDef.path}></path>
            </symbol>
          </defs>
          <use href={`#${svgDef.id}`}></use>
        </svg>
      ))}

      <div
        id="about"
        class="p-4 max-w-screen-lg min-h-full mx-auto flex flex-col items-center justify-center"
      >
        <div class="flex items-center w-full">
          <div class="w-96 h-96 flex-shrink-0 flex-grow-0 bg-purple-50">
            <img
              src="/public/profile.svg"
              width="100%"
              height="100%"
              style="filter: drop-shadow(0 0 2px #666)"
            />
          </div>
          <div
            class="bg-white px-6 py-4 flex-auto relative rounded-xl talkbubble"
            style="filter: drop-shadow(0 0 2px #ccc)"
          >
            <div class="text-2xl md:text-5xl">Hi&#10071; I am</div>
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
        <div class="flex space-x-4 mt-2 md:mt-16">
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
    </>
  );
}
