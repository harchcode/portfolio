import siteInfo from "./site-info";

export function ProjectSection() {
  return (
    <div
      id="project"
      class="px-4 py-16 max-w-screen-lg min-h-screen mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 auto-rows-[1fr]"
    >
      {siteInfo.projects.map(project => (
        <div
          class={`bg-white p-4 rounded-xl border-2 ${project.borderClass} flex flex-col`}
        >
          <div class="flex-none flex">
            <div class="flex-none w-20 h-20 bg-black rounded-lg overflow-hidden shadow border">
              <img
                src={project.imageSrc}
                alt={`Screenshot of ${project.name}`}
                width="100%"
                height="100%"
              />
            </div>
            <div class="flex-auto ml-4 flex flex-col">
              <div class="text-xl">{project.name}</div>
              <div class="flex flex-wrap">
                {project.tags.map(tag => (
                  <div class="text-xs mr-1 mt-1 bg-slate-200 text-black px-2 py-1 rounded">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div class="mt-4 flex-none">{project.description}</div>
          <div class="mt-4 flex-auto flex justify-end">
            <ul class="flex flex-col justify-end space-y-2">
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
