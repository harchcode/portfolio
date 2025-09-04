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
        I enjoy building reliable, scalable apps with smooth UIs and clean animations—crafting experiences that feel effortless for both users and developers.
      </p>
      <p>
        Feel free to reach out if you'd like to collaborate or just say hello.
      </p>
    `,

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
            I worked on various Corporate Technology applications. Most notable
            challenge is developing and maintaining a rather complex Directed Acyclic Graph (DAG)
            editor. I also helped with some small backend tasks.
          </p>
          <p>
            I also got a chance to become a mentor for internship program.
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
            I was mostly working on a dashboard with many customized charts for data visualization,
            like 3D pie charts, a heavily customized bar charts, combined charts, etc.
          </p>
          <p>I have also worked on some features on the Mitra Bukalapak PWA.</p>
        `
    },
    {
      periode: "October 2017 - May 2018",
      companyName: "XMI",
      jobTitle: "Programmer",
      tags: ["PixiJS", "Ionic", "PHP", "Firebase", "MySQL"],
      content: `
          <p>
            Worked on maintaining a mobile game project, fixing bugs and add
            some new features. The most "challenging" part was for a certain
            reason, the source code was gone and I (and the new team) was
            basically working on the built code. :D
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
            I was part of a team that worked on developing and maintaining
            various features of a business application.
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
            This is a library for creating a simple directed graph. It is
            heavily inspired by react-digraph, but with far less features, not
            as polished, and also not built for React :D
          </p>
          <p>
            I initially created this for practice, to make a graph editor
            library that is fast, simple, and has no dependency. I use Canvas and
            implemented some optimization like using Quad Tree to achieve the performance.
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
            This is a simple, old game inspired by Flappy Bird (wished it got as
            successful xD). Originally I created this game for Android using Java and libGDX (around
            2014, was on Play Store, but now it already got removed T.T). I lost
            the original source code, so i recreated this stupid game for the web.
          </p>
          <p>
            This game is created using PixiJS, a 2D rendering framework for the
            web.
          </p>
        `
    }
  ]
};
