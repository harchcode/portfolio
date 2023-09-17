import siteInfo from "./site-info";

export function WorkSection() {
  return (
    <div
      id="work"
      class="px-4 py-16 max-w-screen-lg min-h-screen mx-auto relative grid grid-cols-1 auto-rows-[1fr]"
    >
      {siteInfo.works.map((work, i) => (
        <div class="relative">
          {i !== siteInfo.works.length - 1 && (
            <div class="absolute w-12 md:w-24 h-full flex justify-center">
              <div class="bg-black w-0.5 h-full"></div>
            </div>
          )}

          <div class={`relative flex space-x-4 md:space-x-12 h-full pb-24`}>
            <div class="w-12 h-12 md:w-24 md:h-24 rounded-full bg-white border-black border-2 flex-none overflow-hidden">
              <img src={work.imageSrc} width="100%" height="100%" />
            </div>

            <div
              class={`flex flex-col flex-auto bg-white px-4 pt-3 pb-4 rounded-xl shadow border-t-4 h-full ${work.borderClass}`}
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
              <div class="flex-auto mt-4">{work.content}</div>

              <ul class="list-check flex flex-wrap mt-4 text-xs font-bold text-zinc-500">
                {work.tags.map(check => (
                  <li>{check}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
