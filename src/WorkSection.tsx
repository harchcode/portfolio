import siteInfo from "./site-info";

export function WorkSection() {
  return (
    <div
      id="work"
      class="px-4 py-16 max-w-screen-lg min-h-screen mx-auto relative flex flex-col"
    >
      <div class="flex-auto"></div>
      {siteInfo.works.map((work, i) => (
        <>
          <div class="relative">
            {i !== siteInfo.works.length - 1 && (
              <div class="absolute w-12 md:w-24 h-full flex justify-center">
                <div class="bg-black w-0.5 h-full"></div>
              </div>
            )}

            <div
              class={`relative flex space-x-4 md:space-x-12${
                i === siteInfo.works.length - 1 ? "" : " mb-24"
              }`}
            >
              <div class="w-12 h-12 md:w-24 md:h-24 rounded-full bg-white border-black border-2 flex-none overflow-hidden">
                <img data-image-id={work.imageId} width="100%" height="100%" />
              </div>

              <div
                class={`md:flex md:space-x-12 flex-auto bg-white px-4 pt-3 pb-4 rounded shadow border-r-4 ${work.borderClass}`}
              >
                <div class="w-full md:w-64 md:flex-none">
                  <div>
                    <span class="leading-none font-bold text-xs">
                      {work.periode}
                    </span>
                  </div>
                  <div class="text-2xl md:mt-1 tracking-wider">
                    {work.companyName}
                  </div>
                  <div class="text-sm text-gray-800">{work.jobTitle}</div>
                </div>
                <div class="flex-auto mt-2 md:mt-0">
                  <ul class="list-check">
                    {work.checklist.map(check => (
                      <li>{check}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
