export default {
  intro: `
      <p><span class="text-xl">Hello❗</span></p>
      <p>
        My name is <span class="font-bold">Hartono Chandra</span
        >. I am just your average <span class="font-bold"
          >Software Engineer</span
        >, specializing in <span class="font-bold"
          >Web Development</span
        >.
      </p>
      <p>
        I enjoy building reliable, scalable apps with clean UIs and smooth animations — crafting experiences that feel effortless for both users and developers.
      </p>
      <p>
        Feel free to reach out if you'd like to collaborate or just say hello.
      </p>
    `,

  socialLinks: [
    { title: "GitHub", label: "gh", url: "https://github.com/harchcode" },
    {
      title: "LinkedIn",
      label: "in",
      url: "https://linkedin.com/in/hartonochandra"
    },
    {
      title: "Resume",
      label: "cv",
      url: "https://filedn.eu/lr4y52Kp8s082m7yYRgv8eL/resume-hartono-chandra.pdf"
    }
  ],

  works: [
    {
      periode: "February 2020 - Present",
      companyName: "Traveloka",
      jobTitle: "Software Engineer - Web",
      tags: [
        "React",
        "NextJS",
        "Typescript",
        "D3",
        "Canvas",
        "Web Worker",
        "Jest",
        "Java",
        "Spring Boot",
        "Terraform",
        "AWS"
      ],
      content: `
          <p>
            I’ve worked on a variety of Corporate Technology applications, with the most notable challenge being the development and maintenance of a complex Directed Acyclic Graph (DAG) editor. Along the way, I also contributed to smaller backend tasks.
          </p>
          <p>
            In addition, I had the opportunity to mentor students in an internship program, which was a rewarding experience.
          </p>
        `
    },
    {
      periode: "September 2018 - September 2019",
      companyName: "Bukalapak",
      jobTitle: "Software Engineer - Front End",
      tags: ["D3", "Vue", "Pug", "Nuxt", "PWA"],
      content: `
          <p>
            I spent most of my time working on a dashboard packed with customized data visualizations—everything from 3D pie charts to heavily tweaked bar charts and even combined chart types. It was all about turning complex data into something clear and engaging.
          </p>
          <p>I also had the chance to contribute to the Mitra Bukalapak PWA, adding features that helped improve the experience for its users.</p>
        `
    },
    {
      periode: "October 2017 - May 2018",
      companyName: "XMI",
      jobTitle: "Programmer",
      tags: ["PixiJS", "Ionic", "PHP", "Firebase", "MySQL"],
      content: `
          <p>
            I worked on maintaining a mobile game project, fixing bugs and adding new features. The most “challenging” part? For some reasons, the original source code was gone — so my team and I had to dive in and work directly with the built code (luckily it was not uglified). Quite an adventure. 😅
          </p>
        `
    },
    {
      periode: "November 2013 - April 2017",
      companyName: "Growth Steel Group",
      jobTitle: "Programmer",
      tags: ["C#", "ASP.Net", "MSSQL", "JQuery", "AngularJS", "Vue"],
      content: `
          <p>
            I was part of a team developing and maintaining a wide range of features for a business application—ensuring it kept evolving to meet real-world needs while delivering a great user experience.
          </p>
        `
    }
  ],

  projects: [
    {
      name: "Ubur",
      tags: ["Rust", "WebAssembly", "WebGL", "Canvas"],
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
            This is a simple game where you control a circle and try to eat other circles to become the biggest one.
          </p>
          <p>
            I built it as a way to showcase my skills in creating smooth, high-performance animations—using WebGL for rendering and applying basic math and physics to handle motion and collisions.
          </p>
          <p>
            It also highlights my understanding of common game-related design patterns for optimization, such as Quad Trees for efficient collision detection, Object Pooling, and other performance techniques.
          </p>
          <p>
            On top of that, I took the opportunity to experiment with Rust and WebAssembly, just for fun and to explore how they could push performance even further.
          </p>
        `
    },
    {
      name: "Web Digraph",
      tags: ["Typescript", "Canvas"],
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
            This is a library for drawing simple directed graphs. It is heavily inspired by react-digraph, but with way fewer features, not nearly as shiny, and definitely not made for React 😆.
          </p>
          <p>
            What it does have though, is a much better performance, smoother interactions, and a super tiny bundle size (thanks to having zero dependencies).
          </p>
          <p>
            I built it with Canvas and threw in some smart optimizations, so it can happily draw a huge number of nodes and edges without even breaking a sweat.
          </p>
        `
    },
    {
      name: "Simple Sudoku",
      tags: ["Rust", "WebAssembly", "Typescript"],
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
            This project shows how to generate Sudoku puzzles with varying difficulty and also how to implement a solver. Later on, I gave it a twist by rewriting parts in Rust and WebAssembly, mostly as an experiment.
          </p>
          <p>
            I originally made this way back in 2011, and honestly, I can’t even remember where I first found the algorithm for generating the puzzles with difficulty. So if you recognize it, please tell me.
          </p>
        `
    },
    {
      name: "Kisstastic",
      tags: ["Typescript", "PixiJS"],
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
            This is a simple game inspired by Flappy Bird (wished it was as successful). I first built it for Android back in 2014 using Java and libGDX. It was on the Play Store for a while… until it eventually got removed (RIP 😢).
          </p>
          <p>
            Since I lost the original source code, I decided to recreate this silly little game for the web, just for fun. This version is powered by PixiJS, a fast 2D rendering framework for the browser.
          </p>
        `
    },
    {
      name: "Gaguna",
      borderClass: "border-teal-600",
      tags: ["Typescript", "Utils"],
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
            (maybe), like easing, debounce, bitset, and many more.
          </p>
          <p>
            Gaguna (from common Indonesian words "ga guna") means useless, and
            this library is surely useless for most of you. xD
          </p>
        `
    }
  ]
};
