import siteInfo from "./site-info";

export function ProjectSection() {
  return (
    <div
      id="project"
      class="px-4 py-16 max-w-screen-lg min-h-screen mx-auto grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      {siteInfo.projects.map(project => (
        <div class="bg-white p-4 rounded-xl border-2 border-gray-300 flex flex-col">
          <div class="flex-none flex">
            <div class="flex-none w-20 h-20 bg-black rounded-lg overflow-hidden">
              <img src={project.imageId} />
            </div>
            <div class="flex-auto ml-4 flex flex-col">
              <div class="text-xl">{project.name}</div>
              <div class="flex flex-wrap">
                {project.tags.map(tag => (
                  <div class="text-xs mr-1 mt-1 bg-gray-200 text-black px-2 py-1 rounded">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div class="mt-4 flex-none max-h-48 overflow-hidden">
            {project.description}
          </div>
          <div class="mt-4 flex-auto flex justify-end">
            <ul class="flex flex-col justify-end">
              {project.links.map(link => (
                <li>
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
