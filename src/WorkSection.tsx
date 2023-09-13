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
              <div class="absolute w-12 md:w-24 h-full flex justify-center mt-8">
                <div class="bg-black w-0.5 md:w-1 h-full"></div>
              </div>
            )}

            <div
              class={`relative flex space-x-4 md:space-x-12${
                i === 0 ? "" : " mt-8"
              }`}
            >
              <div
                class="w-12 h-12 md:w-24 md:h-24 rounded-full bg-white border-black border-2 flex-none bg-contain"
                style={`background-image: url(${work.imageSrc})`}
              ></div>
              <div class="md:flex md:space-x-12">
                <div class="w-full md:w-64 md:flex-none">
                  <div>
                    <span class="font-bold text-xs">{work.periode}</span>
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

          <div class="flex-auto relative">
            {i !== siteInfo.works.length - 1 && (
              <div class="absolute w-12 md:w-24 h-full flex justify-center mt-8">
                <div class="bg-black w-0.5 md:w-1 h-full"></div>
              </div>
            )}
          </div>
        </>
      ))}
    </div>
  );
}
