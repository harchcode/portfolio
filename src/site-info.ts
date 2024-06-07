import profilePic from "./assets/profile.svg";
import tvlkLogo from "./assets/logo-tvlk.jpeg";
import blLogo from "./assets/logo-bl.png";
import xmiLogo from "./assets/logo-xmi.png";
import gsgLogo from "./assets/logo-gsg.jpeg";
import ssUbur from "./assets/ss-ubur.png";
import ssWebDigraph from "./assets/ss-web-digraph.png";
import ssSudoku from "./assets/ss-sudoku.png";
import ssGaguna from "./assets/ss-gaguna.png";
import ssKisstastic from "./assets/ss-kisstastic.png";

type SVGSymbolId = "doc" | "email" | "github" | "linkedin" | "play";

export type SVGDef = {
  id: SVGSymbolId;
  viewBox: string;
  path: string;
};

export type SocialLink = {
  label: string;
  url: string;
  linkText?: string;
  svgSymbolId: SVGSymbolId;
  bgColor: string;
  textColor: string;
  borderColor: string;
};

export type About = {
  name: string;
  imageSrc: ImageMetadata;
  jobTitle: string;
  intro: string;
  resumeUrl: string;
};

export type Work = {
  imageSrc: ImageMetadata;
  periode: string;
  companyName: string;
  jobTitle: string;
  content: string;
  tags: string[];
  borderClass: string;
  bgClass: string;
  cardBgClass: string;
  gradientClass?: string;
};

export type Project = {
  name: string;
  imageSrc: ImageMetadata;
  tags: string[];
  description: string;
  links: {
    text: string;
    url: string;
  }[];
  borderClass: string;
};

export type SiteInfo = {
  title: string;
  description: string;
  svgDefs: SVGDef[];
  about: About;
  socialLinks: SocialLink[];
  works: Work[];
  projects: Project[];
};

const siteInfo: SiteInfo = {
  title: "Hartono Chandra",
  description: "My Portfolio Site",
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
  about: {
    imageSrc: profilePic,
    jobTitle: "Software Engineer - Web",
    name: "Hartono Chandra",
    intro: `
        <p>
          Hello! I am an average software engineer, specialized in web. 
        </p>
        <p>
          You can check out some of my toy projects in the Projects section. If
          you want to know more about me, please contact me.
        </p>`,
    resumeUrl:
      "https://filedn.eu/lr4y52Kp8s082m7yYRgv8eL/resume-hartono-chandra.pdf"
  },
  socialLinks: [
    {
      label: "Resume",
      url: "https://filedn.eu/lr4y52Kp8s082m7yYRgv8eL/resume-hartono-chandra.pdf",
      linkText:
        "https://filedn.eu/lr4y52Kp8s082m7yYRgv8eL/resume-hartono-chandra.pdf",
      svgSymbolId: "doc",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-700",
      borderColor: "border-yellow-950"
    },
    {
      label: "Email",
      url: "mailto:harchcode@gmail.com",
      linkText: "harchcode@gmail.com",
      svgSymbolId: "email",
      bgColor: "bg-rose-50",
      textColor: "text-rose-900",
      borderColor: "border-rose-950"
    },
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/hartonochandra/",
      linkText: "linkedin.com/in/hartonochandra",
      svgSymbolId: "linkedin",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
      borderColor: "border-blue-950"
    },
    {
      label: "GitHub",
      url: "https://github.com/harchcode",
      linkText: "github.com/harchcode",
      svgSymbolId: "github",
      bgColor: "bg-slate-100",
      textColor: "text-slate-700",
      borderColor: "border-slate-950"
    }
  ],
  works: [
    {
      imageSrc: tvlkLogo,
      periode: "February 2020 - Present",
      companyName: "Traveloka",
      jobTitle: "Software Engineer - Web",
      tags: [
        "Graph",
        "React",
        "NextJS",
        "Typescript",
        "Jest + React Testing Library",
        "Mentor for Kampus Merdeka internship"
      ],
      content: `
          <p>
            I worked on various Corportate Technology applications. Most notable
            challenge is developing and maintaining a rather complex graph
            editor.
          </p>
          <p>
            I also got a chance to become a mentor for Kampus Merdeka internship
            program cycle 1 and 3.
          </p>
        `,
      borderClass: "border-blue-600",
      bgClass: "bg-blue-600",
      cardBgClass: "bg-blue-50",
      gradientClass: "from-blue-600 to-red-600"
    },
    {
      imageSrc: blLogo,
      periode: "September 2018 - September 2019",
      companyName: "Bukalapak",
      jobTitle: "Software Engineer - Front End",
      tags: ["Charts with D3", "Vue", "Pug", "Nuxt", "PWA"],
      content: `
          <p>
            I was mostly working on a dashboard with many customized charts,
            like 3D pie charts, a very customized bar charts, combined line and
            bar chart, etc.
          </p>
          <p>I also have worked on some features on the Mitra Bukalapak PWA.</p>
        `,
      borderClass: "border-red-600",
      bgClass: "bg-red-600",
      cardBgClass: "bg-red-50",
      gradientClass: "from-red-600 to-zinc-700"
    },
    {
      imageSrc: xmiLogo,
      periode: "October 2017 - May 2018",
      companyName: "XMI",
      jobTitle: "Programmer",
      tags: ["Ionic Framework", "Slim (PHP)", "PixiJS", "Firebase", "MySQL"],
      content: `
          <p>
            Worked on maintaining a mobile game project, fixing bugs and add
            some new features. The most "challenging" part was for a certain
            reason, the source code was gone and I (and the new team) was
            basically working on the built code. :D
          </p>
        `,
      borderClass: "border-zinc-700",
      bgClass: "bg-zinc-700",
      cardBgClass: "bg-zinc-50",
      gradientClass: "from-zinc-700 to-indigo-600"
    },
    {
      imageSrc: gsgLogo,
      periode: "November 2013 - April 2017",
      companyName: "Growth Steel Group",
      jobTitle: "Programmer",
      tags: [
        "ASP Web Forms",
        "C#",
        "JQuery",
        "AngularJS",
        "Vue",
        "ASP.Net",
        "Crystal Reports",
        "MSSQL"
      ],
      content: `
          <p>
            I was part of a team that worked on developing and maintaining
            various features of a business application.
          </p>
        `,
      borderClass: "border-indigo-600",
      bgClass: "bg-indigo-600",
      cardBgClass: "bg-indigo-50"
    }
  ],
  projects: [
    {
      name: "Ubur",
      imageSrc: ssUbur,
      borderClass: "border-fuchsia-800",
      tags: ["Rust", "WebGL", "Canvas"],
      links: [
        {
          text: "Play",
          url: "https://ubur.netlify.app/"
        },
        {
          text: "Code",
          url: "https://github.com/harchcode/ubur"
        }
      ],
      description: `
          <p>
            This is a simple game where we control a circle and try to eat other
            circles to become the biggest.
          </p>
          <p>
            This game uses WebGL for rendering, some maths and physics for
            motion and collision handling, implementing Quad Tree for optimized
            collision detection, and I was also experimenting with WebAssembly
            and Rust.
          </p>
        `
    },
    {
      name: "Web Digraph",
      imageSrc: ssWebDigraph,
      borderClass: "border-sky-600",
      tags: ["TS", "Canvas", "Graph"],
      links: [
        {
          text: "Demo",
          url: "https://web-digraph.netlify.app/"
        },
        {
          text: "Code",
          url: "https://github.com/harchcode/web-digraph"
        },
        {
          text: "NPM",
          url: "https://www.npmjs.com/package/web-digraph"
        }
      ],
      description: `
          <p>
            This is a library for creating a simple directed graph. It is
            heavily inspired by react-digraph, but with far less features, not
            as polished, and also not built for React :D
          </p>
          <p>
            I initially created this for practice, to make a graph editor
            library that is fast, simple, and no dependency. I use Canvas and
            implemented Quad Tree to achieve the performance. You can try
            generating 1,000 nodes on react-digraph vs generating 999,999 nodes
            on web-digraph and then interact with the graph.
          </p>
        `
    },
    {
      name: "Simple Sudoku",
      imageSrc: ssSudoku,
      borderClass: "border-stone-600",
      tags: ["Rust", "TS"],
      links: [
        {
          text: "Play",
          url: "https://simple-sudoku-ts.netlify.app/"
        },
        {
          text: "Code",
          url: "https://github.com/harchcode/simple-sudoku-ts"
        }
      ],
      description: `
          <p>A simple 3x3 sudoku game.</p>
          <p>
            This game shows how to generate simple 3x3 sudoku problems, and also
            how to implement a sudoku solver. I also updated this to use Rust
            and WebAssembly for experimentation.
          </p>
          <p>
            I actually created this originally around 2011, and I already forgot
            where I got the algorithm for the problem generator with difficulty.
            Please let me know if you know.
          </p>
        `
    },
    {
      name: "Gaguna",
      imageSrc: ssGaguna,
      borderClass: "border-teal-600",
      tags: ["TS", "Utils"],
      links: [
        {
          text: "NPM",
          url: "https://www.npmjs.com/package/gaguna"
        },
        {
          text: "Code",
          url: "https://github.com/harchcode/gaguna"
        }
      ],
      description: `
          <p>
            This library is a collection of utils/functions that I found useful
            (maybe).
          </p>
          <p>
            This library contains things like easing functions, debounce
            function, bitset, etc.
          </p>
          <p>
            Gaguna (from common Indonesian words "ga guna") means useless, and
            this library is surely useless for most of you. xD
          </p>
        `
    },
    {
      name: "Kisstastic",
      imageSrc: ssKisstastic,
      borderClass: "border-green-800",
      tags: ["TS", "PixiJS"],
      links: [
        {
          text: "Code",
          url: "https://github.com/harchcode/kisstastic"
        },
        {
          text: "Play",
          url: "https://kisstastic.netlify.app/"
        }
      ],
      description: `
          <p>
            This is a simple, old game inspired by Flappy Bird (wished it got as
            successful xD). Originally I created this game for Android (around
            2014, was on Play Store, but now it already got removed T.T). I lost
            the original source code, so i recreated this dumb game for the web.
          </p>
          <p>
            This game is created using PixiJS, a 2D rendering framework for the
            web.
          </p>
        `
    }
  ]
};

export default siteInfo;
