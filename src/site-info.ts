import tvlkLogo from "./assets/logo-tvlk.jpeg";
import blLogo from "./assets/logo-bl.png";
import xmiLogo from "./assets/logo-xmi.png";
import gsgLogo from "./assets/logo-gsg.jpeg";
import ssUbur from "./assets/ss-ubur.png";
import ssWebDigraph from "./assets/ss-web-digraph.png";
import ssSudoku from "./assets/ss-sudoku.png";
import ssGaguna from "./assets/ss-gaguna.png";
import ssPortfolio from "./assets/ss-portfolio.png";
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
  svgSymbolId: SVGSymbolId;
};

export type Work = {
  imageSrc: string;
  from: string;
  to: string;
  companyName: string;
  jobTitle: string;
  checklist: string[];
  tags: string[];
};

export type Project = {
  name: string;
  imageSrc: string;
  tags: string[];
  description: string;
  links: {
    text: string;
    url: string;
  }[];
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

export const site: SiteInfo = {
  title: "Hartono Chandra",
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
    "I am just your average software engineer, specialized in web. Nothing special about me, I just happen to have a job as a web engineer, and can do my job as expected like everyone else.",
  socialLinks: [
    {
      label: "resume",
      url: "https://e1.pcloud.link/publink/show?code=XZPXKHZV6cxy6RCdXXdIoG7dLHKRkplV8V7",
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
      imageSrc: tvlkLogo,
      from: "February 2020",
      to: "Present",
      companyName: "Traveloka",
      jobTitle: "Software Engineer - Web",
      tags: ["React", "Semantic UI", "react-digraph", "Typescript", "Jest"],
      checklist: [
        "Used React and Semantic UI as frontend framework.",
        html`Used
          <a href="https://github.com/uber/react-digraph">react-digraph</a>
          for creating directed graph.`,
        "Done some basic infra works with Terraform.",
        "Wrote unit tests with Jest and React Testing Library."
      ]
    },
    {
      imageSrc: blLogo,
      from: "September 2018",
      to: "September 2019",
      companyName: "Bukalapak",
      jobTitle: "Software Engineer - Front End",
      tags: ["D3", "Vue", "Pug", "PWA"],
      checklist: [
        "Used Vue and Pug as the frontend framework.",
        "Built various kinds of charts using D3."
      ]
    },
    {
      imageSrc: xmiLogo,
      from: "October 2017",
      to: "May 2018",
      companyName: "XMI",
      jobTitle: "Programmer",
      tags: ["Ionic", "Slim", "PixiJS"],
      checklist: [
        "Maintained and added new features to a mobile game built using Ionic Framework, PixiJS, and Slim (PHP framework)."
      ]
    },
    {
      imageSrc: gsgLogo,
      from: "November 2013",
      to: "April 2017",
      companyName: "Growth Steel Group",
      jobTitle: "Programmer",
      tags: ["JQuery", "AngularJS", "Vue", "ASP.Net", "Crystal Reports"],
      checklist: [
        "Used JQuery, AngularJS, and later Vue as frontend framework.",
        "Migrated from ASP.Net Web Forms to REST API with ASP.Net using C# as the programming language.",
        "Created reports with Crystal Reports."
      ]
    }
  ],
  projects: [
    {
      name: "Ubur",
      imageSrc: ssUbur,
      tags: ["Rust", "WebAssembly", "Typescript", "WebGL", "Canvas"],
      links: [
        {
          text: "See it in action",
          url: "https://ubur.netlify.app/"
        },
        {
          text: "See the source code",
          url: "https://github.com/harchcode/ubur"
        }
      ],
      description: html`<p>
          This is a simple game where we control a circle and try to eat other
          circles to become the biggest.
        </p>
        <p>
          This game uses WebGL for rendering, some maths and physics for motion
          and collision handling.
        </p>`
    },
    {
      name: "Web Digraph",
      imageSrc: ssWebDigraph,
      tags: ["Typescript", "Canvas", "Library", "Graph"],
      links: [
        {
          text: "See the demo",
          url: "https://web-digraph.netlify.app/"
        },
        {
          text: "Go to the GitHub page",
          url: "https://github.com/harchcode/web-digraph"
        }
      ],
      description: html`<p>
          This is a library for creating a simple directed graph. It is heavily
          inspired by react-digraph, but with far less features, and also not
          built for React :D
        </p>
        <p>
          The key difference of this library from react-digraph (apart from the
          obviously less features xD) is the use of HTML5 Canvas for rendering,
          instead of using SVG. Using Canvas gives better performance on large
          graph. You can try generating 9999 nodes on the demo, and compare it
          with react-digraph's demo.
        </p>
        <p>
          Another benefit of this library is that it has no dependencies, unlike
          react-digraph which is based on React and D3, and relies on some other
          dependencies.
        </p>
        <p>Sorry for the wall of text :P</p>`
    },
    {
      name: "Simple Sudoku TS",
      imageSrc: ssSudoku,
      tags: ["Rust", "WebAssembly", "Typescript", "Sudoku"],
      links: [
        {
          text: "See it in action",
          url: "https://simple-sudoku-ts.netlify.app/"
        },
        {
          text: "See the source code",
          url: "https://github.com/harchcode/simple-sudoku-ts"
        }
      ],
      description: html`<p>A simple 3x3 sudoku game.</p>
        <p>
          This game shows how to generate simple 3x3 sudoku problems, and also
          how to implement a sudoku solver.
        </p>
        <p>
          I actually created this originally around 2011, and I already forgot
          where I got the algorithm for the problem generator with difficulty.
          Please let me know if you know.
        </p>`
    },
    {
      name: "Gaguna",
      imageSrc: ssGaguna,
      tags: ["Typescript", "Utils"],
      links: [
        {
          text: "Go to the docs site",
          url: "https://github.com/harchcode/gaguna"
        },
        {
          text: "Go to the GitHub page",
          url: "https://github.com/harchcode/gaguna"
        }
      ],
      description: html`<p>
          This library is a collection of utils/functions that I found useful
          (maybe).
        </p>
        <p>
          This library contains things like easing functions, debounce function,
          bitset, etc.
        </p>
        <p>
          Gaguna (from common Indonesian words "ga guna") means useless, and
          this library is surely useless for most of you xD
        </p>`
    },
    {
      name: "This Site",
      imageSrc: ssPortfolio,
      tags: ["Typescript", "Tailwind", "Astro", "Canvas"],
      links: [
        {
          text: "See the source code",
          url: "https://github.com/harchcode/portfolio"
        }
      ],
      description: html`<p>
          Yes, this portfolio site that you are currently viewing is also part
          of my portfolio!
        </p>
        <p>
          This site is built using Astro as static site generator, Tailwind for
          styles, and Canvas for the annoying background you see on this site.
        </p>
        <p>This site supports mobile and desktop view.</p>`
    },
    {
      name: "Kisstastic",
      imageSrc: ssKisstastic,
      tags: ["Typescript", "PixiJS"],
      links: [
        {
          text: "See the source code",
          url: "https://github.com/harchcode/kisstastic"
        },
        {
          text: "See it in action (lower your volume first xD)",
          url: "https://kisstastic.netlify.app/"
        }
      ],
      description: html`<p>
          This is a simple, old game inspired by Flappy Bird (wished it got as
          successful xD). Originally I created this game for Android (around
          2014, was on Play Store, but now it already got removed T.T). I lost
          the original source code, so i recreated this dumb game for the web.
        </p>
        <p>
          This game is created using PixiJS, a 2D rendering framework for the
          web.
        </p>`
    }
  ]
};
