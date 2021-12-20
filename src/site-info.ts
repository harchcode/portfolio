type SVGSymbolId = "doc" | "email" | "github" | "linkedin" | "play";

export type SVGDef = {
  id: SVGSymbolId;
  viewBox: string;
  path: string;
};

export type SocialLink = {
  label: string;
  url: string;
  svgSymbolId: SVGSymbolId;
};

export type Work = {
  imageSrc: string;
  periode: string;
  companyName: string;
  jobTitle: string;
  description: string;
};

export type Project = {
  name: string;
  imageSrc: string;
  url: string;
  githubUrl: string;
};

export type SiteInfo = {
  title: string;
  description: string;
  svgDefs: SVGDef[];
  photoUrl: string;
  intro: string;
  socialLinks: SocialLink[];
  works: Work[];
  projects: Project[];
};

function html(strings: TemplateStringsArray, ...values: unknown[]) {
  let str = strings[0];

  for (let i = 0; i < values.length; i++) {
    str += values[i] + strings[i + 1];
  }

  return str;
}

const siteInfo: SiteInfo = {
  title: "Hohoho",
  description: "",
  svgDefs: [
    {
      id: "doc",
      viewBox: "0 0 24 24",
      path: "M22 0h-20v24h14l6-6v-18zm-6 18h4.36l-4.36 4.385v-4.385zm-3 1h-8v1h8v-1zm0-3h-8v1h8v-1zm6-2v-1h-14v1h14zm-7.059-4.968c-1.147-.265-2.214-.497-1.697-1.473 1.573-2.97.417-4.559-1.244-4.559-1.694 0-2.821 1.65-1.244 4.559.532.982-.575 1.214-1.697 1.473-1.024.237-1.062.745-1.059 1.635l.001.333h7.997l.001-.323c.004-.896-.03-1.407-1.058-1.645zm7.059.968h-4v1h4v-1zm0-2v-1h-4v1h4zm0-4h-4v1h4v-1z"
    },
    {
      id: "email",
      viewBox: "0 0 24 24",
      path: "M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"
    },
    {
      id: "linkedin",
      viewBox: "0 0 24 24",
      path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
    },
    {
      id: "github",
      viewBox: "0 0 24 24",
      path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
    },
    {
      id: "play",
      viewBox: "0 0 24 24",
      path: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z"
    }
  ],
  photoUrl: "/assets/login.svg",
  intro:
    "I am just your average software engineer, specialize in web. Nothing special about me, I just happen to have a job as a web engineer, and can do my job as expected like everyone else.",
  socialLinks: [
    {
      label: "resume",
      url: "https://google.com",
      svgSymbolId: "doc"
    },
    {
      label: "email",
      url: "mailto:harchcode@gmail.com",
      svgSymbolId: "email"
    },
    {
      label: "linkedin",
      url: "https://linkedin.com/in/hartonochandra/",
      svgSymbolId: "linkedin"
    },
    {
      label: "github",
      url: "https://github.com/harchcode",
      svgSymbolId: "github"
    }
  ],
  works: [
    {
      imageSrc: "/assets/logo-tvlk.jpeg",
      periode: "February 2020 - Present",
      companyName: "Traveloka",
      jobTitle: "Software Engineer - Web",
      description: html`<ul class="list-disc">
        <li>Used React and Semantic UI as frontend framework.</li>
        <li>Used Typescript on the codebase.</li>
        <li>
          Used
          <a class="text-blue-700" href="https://github.com/uber/react-digraph"
            >react-digraph</a
          >
          and customized it for creating directed graph.
        </li>
        <li>Done some basic infra works with Terraform.</li>
      </ul>`
    },
    {
      imageSrc: "/assets/logo-bl.png",
      periode: "September 2018 - September 2019",
      companyName: "Bukalapak",
      jobTitle: "Software Engineer - Front End",
      description: html`<ul class="list-disc">
        <li>Used Vue as frontend framework.</li>
        <li>Extensive use of D3 to create many kinds of graph.</li>
      </ul>`
    },
    {
      imageSrc: "/assets/logo-xmi.png",
      periode: "October 2017 - May 2018",
      companyName: "XMI",
      jobTitle: "Programmer",
      description: html`<ul class="list-disc">
        <li>
          Maintained and added new features to a mobile game built using Ionic
          Framework, PixieJS, and PHP.
        </li>
      </ul>`
    },
    {
      imageSrc: "/assets/logo-gsg.jpeg",
      periode: "November 2013 - April 2017",
      companyName: "Growth Steel Group",
      jobTitle: "Programmer",
      description: html`<ul class="list-disc">
        <li>Used JQuery, AngularJS, and later Vue as frontend framework.</li>
        <li>
          Used ASP.Net Web Form and then migrated to REST API with ASP.Net using
          C# as the programming language.
        </li>
        <li>Used Crystal Reports for creating reports.</li>
      </ul>`
    }
  ],
  projects: [
    {
      name: "Ubur",
      imageSrc: "/assets/ss-ubur.png",
      url: "https://ubur.netlify.app/",
      githubUrl: "https://github.com/harchcode/ubur"
    },
    {
      name: "Web Digraph",
      imageSrc: "/assets/ss-web-digraph.png",
      url: "https://web-digraph.netlify.app/",
      githubUrl: "https://github.com/harchcode/web-digraph"
    },
    {
      name: "Sudoku JS",
      imageSrc: "/assets/ss-sudoku.png",
      url: "https://harchcode.github.io/sudokujs/",
      githubUrl: "https://github.com/harchcode/sudokujs"
    },
    {
      name: "EzMsg",
      imageSrc: "/assets/ss-ezmsg.png",
      url: "https://libezmsg.netlify.app/",
      githubUrl: "https://github.com/harchcode/ezmsg"
    }
  ]
};

export default siteInfo;
