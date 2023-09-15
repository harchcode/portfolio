import { AboutSection } from "./AboutSection";
import { NavBar } from "./Navbar";
import { ProjectSection } from "./ProjectSection";
import { WorkSection } from "./WorkSection";
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

      {/* <div class="fixed h-full w-full">
        <canvas id="canvas"></canvas>
      </div> */}

      <NavBar />
      <AboutSection />
      <WorkSection />
      <ProjectSection />
    </>
  );
}
