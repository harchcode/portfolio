import siteInfo from "./site-info";

export function ProjectSection() {
  return (
    <div
      id="project"
      class="px-4 py-16 max-w-screen-lg min-h-screen mx-auto flex flex-col space-y-32"
    >
      {siteInfo.projects.map(project => (
        <div class="w-full flex flex-col md:flex-row">
          <div class="w-full bg-black md:w-auto md:h-80 flex items-center justify-center border shadow-md">
            <div
              class="w-full max-w-xs md:w-80 md:h-80 bg-black bg-cover"
              style={`aspect-ratio: 1/1; min-height: 10rem; background-image: url(${project.imageSrc})`}
            ></div>
          </div>
          <div class="mt-2 md:mt-0 md:ml-2 px-2 md:px-4 flex flex-col flex-1">
            <div class="text-3xl tracking-wider">{project.name}</div>
            <div class="mt-1 flex flex-wrap">
              {project.tags.map(tag => (
                <div class="text-xs mr-1 mt-1 bg-gray-200 text-gray-800 px-1 py-0.5 rounded">
                  {tag}
                </div>
              ))}
            </div>
            <div class="my-4 flex-auto">{project.description}</div>
            <div class="flex justify-end">
              <ul class="space-y-2">
                {project.links.map(link => (
                  <li>
                    <a href={link.url}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
