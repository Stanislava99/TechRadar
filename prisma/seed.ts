import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function seed() {
  const email = "andrejAndStasha@remix.run";

  // cleanup the existing database
  await prisma.user.delete({ where: { email } }).catch(() => {
    // no worries if it doesn't exist yet
  });

  const hashedPassword = await bcrypt.hash("123456789", 10);

  const users = [
    {
      id: "1",
      email: "zdravko.nikolovski@netcetera.com",
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
    {
      id: "2",
      email: "alexander.imfeld@netcetera.com",
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
    {
      id: "3",
      email: "stefan.odendahl@netcetera.com",
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
    {
      id: "4",
      email: "peco.stanoev@netcetera.com",
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
    {
      id: "5",
      email: "lars.meijers@netcetera.com",
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
    {
      id: "6",
      email: "philippe.marchall@netcetera.com",
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
    {
      id: "7",
      email: "vladimir.trajkovski@netcetera.com",
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
    {
      id: "8",
      email: "thomas.wimmer@netcetera.com",
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
    {
      id: "9",
      email: "adreas.dejung@netcetera.com",
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
    {
      id: "10",
      email: "aleksandar.apostolovski@netcetera.com",
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  ]

  const technologies = [
    {
      id:"1",
      entryDate: "2022-06-02T19:20:30.451Z",
      name: "Blazor",
      linkToTechnology: "https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor",
      userId: "1",
      description: "Build client apps with subset of the .NET framework. The app compiles to web assembly. There are also a lot of open source widget libraries that are available. Can be distributed as server side rendered content (Blazor Server) or PWA (works entirely in browser and just consumes REST API).\n",
      type: "LANGUAGES",
      currentViabilityLevel: "ADOPT"
    },
    {
      id: "2",
      entryDate: "2022-06-02T19:20:30.451Z",
      name: ".NET Multiplatform App UI (MAUI)",
      linkToTechnology: "https://docs.microsoft.com/en-us/dotnet/maui/what-is-maui",
      userId: "1",
      description: "Successor to Xamarin.Forms, but supports more platforms. Should be explored if the drawbacks of Xamarin are still there or not.\n",
      type: "LANGUAGES",
      currentViabilityLevel: "ASSESS"
    },
    {
      id:"3",
      entryDate: "2022-06-02T19:20:30.451Z",
      name: "Playwright",
      linkToTechnology: "https://playwright.dev/",
      userId: "1",
      description:"Looks like an interesting end-to-end testing framework.\n" +
        "\n" +
        "Playwright Test is a test runner which tests running web sites by opening them in an integrated browser (Chromium, Chrome, Edge, Firefox, WebKit). Runs on Windows, macOS and Linux. Tests are written in Java, .NET, Python, Javascript or Typescript.\n" +
        "\n" +
        "Playwright Library is a Javascript library for integrating testing functionality into custom test runners.",
      type: "LANGUAGES",
      currentViabilityLevel: "ADOPT"
    },
    {
      id:"4",
      entryDate: "2022-06-02T19:20:30.451Z",
      name: "Crossplane",
      linkToTechnology: "https://playwright.dev/",
      userId: "2",
      description:"Leverage the K8s API to manage infrastructure. Ready-made providers for AWS, Azure and GCP. Interesting tool for platform teams and for enabling developer teams (Developer Experience - DX). I want to give this a spin in the context of CNN (Cloud Native Netcetera) on AWS.\n" +
        "\n" +
        "→ can be used in a real project, but first try it out in CNN",
      type: "LANGUAGES",
      currentViabilityLevel: "ADOPT"
    },
    {
      id:"5",
      entryDate: "2022-06-02T19:20:30.451Z",
      name: "Apache Camel",
      linkToTechnology: "https://camel.apache.org/",
      userId: "3",
      description:"Use Camel as an API gateway, not just for integration",
      type: "LANGUAGES",
      currentViabilityLevel: "ADOPT"
    },
    {
      id:"6",
      entryDate: "2022-06-02T19:20:30.451Z",
      name: "SolidJS",
      linkToTechnology: "https://www.solidjs.com/",
      userId: "4",
      description:"JavaScript framework for making interactive and reactive web applications.",
      type: "LANGUAGES",
      currentViabilityLevel: "ADOPT"
    },
    {
      id:"7",
      entryDate: "2022-07-11T19:20:30.451Z",
      name: "Quarkus",
      linkToTechnology: "https://quarkus.io/",
      userId: "5",
      description:"Quarkus is a Java framework which can replace Spring Boot. It supports reactive programming, events/messages, serverless and is container-first (and a few other buzzwords). Optimized for low memory usage and fast startup times. Together with GraalVM even faster native executables are possible.\n" +
        "\n" +
        "Would it make sense to switch to Quarkus? Would it help our environment (and finances), because it uses less resources? Would we need completely different build tools or can we use the existing ones?\n" +
        "\n" +
        "How does it compare to Spring Native?",
      type: "LANGUAGES",
      currentViabilityLevel: "ADOPT"
    },
    {
      id:"8",
      entryDate: "2022-07-13T19:20:30.451Z",
      name: "Renovate (auto dependency updating)\n" +
        "\n" +
        "Dependabot (github/gitlab)",
      linkToTechnology: "https://github.com/renovatebot\n" +
        "\n" +
        "https://gitlab.com/dependabot-gitlab/dependabot\n" +
        "\n" +
        "https://github.com/dependabot",
      userId: "6",
      description:"From a INFOSEC perspective this would hopefully help teams to keep there dependencies up-to-date. From a Project/product and Software engineer perspective this would reduce the amount of time spent on \"trivial\" dependency updates.",
      type: "LANGUAGES",
      currentViabilityLevel: "ADOPT"
    },
    {
      id:"9",
      entryDate: "2022-07-13T19:20:30.451Z",
      name: "Kotlin",
      linkToTechnology: "https://kotlinlang.org/",
      userId: "10",
      description:"A modern programming language\n" +
        "that makes developers happier.",
      type: "LANGUAGES",
      currentViabilityLevel: "ADOPT"
    },
    {
      id:"10",
      entryDate: "2022-07-13T19:20:30.451Z",
      name: "Threat Modeling",
      linkToTechnology: "https://owasp.org/www-community/Threat_Modeling",
      userId: "10",
      description:"Threat modeling works to identify, communicate, and understand threats and mitigations within the context of protecting something of value.\n" +
        "\n" +
        "A threat model is a structured representation of all the information that affects the security of an application. In essence, it is a view of the application and its environment through the lens of security.\n" +
        "\n" +
        "Threat modeling can be applied to a wide range of things, including software, applications, systems, networks, distributed systems, Internet of Things (IoT) devices, and business processes.\n" +
        "\n" +
        "A threat model typically includes:\n" +
        "\n" +
        "Description of the subject to be modeled\n" +
        "Assumptions that can be checked or challenged in the future as the threat landscape changes\n" +
        "Potential threats to the system\n" +
        "Actions that can be taken to mitigate each threat\n" +
        "A way of validating the model and threats, and verification of success of actions taken",
      type: "TECHNIQUES",
      currentViabilityLevel: "ADOPT"
    },
    {
      id:"11",
      entryDate: "2022-07-13T19:20:30.451Z",
      name: "Local First Application",
      linkToTechnology: "https://www.inkandswitch.com/local-first/",
      userId: "10",
      description:"In a centralized application, the data on the server is the single source of truth — any modification to the data must go through the server. Local data is subordinate to the server version. This seems like a natural and inevitable choice to enable collaboration among multiple users of the software. Local-first application, or local-first software, is a set of principles that enables both collaboration and local data ownership. It prioritizes the use of local storage and local networks over servers in remote data centers or the cloud. Techniques like conflict-free replicated data types (CRDTs) and peer-to-peer (P2P) networks have the potential to be a foundational technology for realizing local-first software.",
      type: "TECHNIQUES",
      currentViabilityLevel: "ASSESS"
    },
    {
      id:"12",
      entryDate: "2022-07-13T19:20:30.451Z",
      name: "SPA By Default",
      linkToTechnology: "https://www.thoughtworks.com/radar/techniques/spa-by-default",
      userId: "10",
      description:"The prevalence of teams choosing a single-page application (SPA) when they need a website continues. We remain concerned that people aren't properly recognizing SPAs as an architectural style to begin with; instead they're immediately jumping into framework selection. SPAs incur complexity that simply doesn't exist with traditional server-based websites: issues such as search engine optimization, browser history management, web analytics and first page load time all need to be addressed. Proper analysis and consideration of the trade-offs is required to determine if that complexity is warranted for business or user experience reasons. Too often teams are skipping that trade-off analysis, blindly accepting the complexity of SPAs by default even when business needs don't justify it. We still see some developers who aren't aware of an alternative approach because they've spent their entire career in a framework like React. We believe that many websites will benefit from the simplicity of server-side logic, and we're encouraged by techniques like Hotwire that help close the gap on user experience.",
      type: "TECHNIQUES",
      currentViabilityLevel: "HOLD"
    },
    {
      id:"13",
      entryDate: "2022-07-13T19:20:30.451Z",
      name: "k6",
      linkToTechnology: "https://k6.io/",
      userId: "10",
      description:"The best developer experience\n" +
        "for load testing\n" +
        "Open source load testing tool and SaaS\n" +
        "for engineering teams",
      type: "TOOLS",
      currentViabilityLevel: "ADOPT"
    },
    {
      id:"14",
      entryDate: "2022-07-13T19:20:30.451Z",
      name: "Apache Superset",
      linkToTechnology: "https://superset.apache.org/",
      userId: "10",
      description:"Superset is fast, lightweight, intuitive, and loaded with options that make it easy for users of all skill sets to explore and visualize their data, from simple line charts to highly detailed geospatial charts.",
      type: "TOOLS",
      currentViabilityLevel: "ASSESS"
    },
    {
      id:"15",
      entryDate: "2022-07-13T19:20:30.451Z",
      name: "Bun",
      linkToTechnology: "https://bun.sh/",
      userId: "10",
      description:"Bun is a fast all-in-one JavaScript runtime\n" +
        "Bundle, transpile, install and run JavaScript & TypeScript projects — all in Bun. Bun is a new JavaScript runtime with a native bundler, transpiler, task runner and npm client built-in.",
      type: "PLATFORMS",
      currentViabilityLevel: "ASSESS"
    },
    {
      id:"16",
      entryDate: "2022-07-13T19:20:30.451Z",
      name: "Colima",
      linkToTechnology: "https://github.com/abiosoft/colima",
      userId: "10",
      description:"Container runtimes on macOS (and Linux) with minimal setup.",
      type: "PLATFORMS",
      currentViabilityLevel: "TRIAL"
    },
  ];

  const whereToTryTechnology =[
    {
      id:"1",
      whereToTry:"CODE_CAMP",
      technologyId:"1"
    },
    {
      id:"2",
      whereToTry:"INTERNS",
      technologyId:"1"
    },
    {
      id:"3",
      whereToTry:"CODE_CAMP",
      technologyId:"2"
    },
    {
      id:"4",
      whereToTry:"INTERNS",
      technologyId:"2"
    },
    {
      id:"5",
      whereToTry:"PROJECT",
      technologyId:"3"
    },
    {
      id:"6",
      whereToTry:"PROJECT",
      technologyId:"4"
    },
    {
      id:"7",
      whereToTry:"CODE_CAMP",
      technologyId:"5"
    },
    {
      id:"8",
      whereToTry:"INTERNS",
      technologyId:"6"
    },
    {
      id:"9",
      whereToTry:"PROJECT",
      technologyId:"7"
    },
    {
      id:"10",
      whereToTry:"PROJECT",
      technologyId:"8"
    },
  ]
  for (const user of users) {
    await prisma.user.upsert({
      where: {id: user.id},
      create: user,
      update: user
    });
  }
  console.log(`Database has been seeded. 🌱`);

  for (const technology of technologies) {
    await prisma.technology.upsert({
      where: {id: technology.id},
      create: technology,
      update: technology
    });
  }

  console.log(`Database has been seeded. 🌱`);
  for (const whereToTry of whereToTryTechnology) {
    await prisma.whereToTryTechnology.upsert({
      where: {id: whereToTry.id},
      create: whereToTry,
      update: whereToTry
    });
  }
  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
