import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function seed() {
  const email = "andrejAndStasha@remix.run";

  // cleanup the existing database
  await prisma.user.delete({ where: { email } }).catch(() => {
    // no worries if it doesn't exist yet
  });

  const hashedPassword = await bcrypt.hash("andrejAndStashaIsCool", 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });

  const users = [
    {
      id: "1",
      email: "zdravko.nikolovski@netcetera.com",
      password: "hiosadhasc"
    },
    {
      id: "2",
      email: "alexander.imfeld@netcetera.com",
      password: "hiosadhasc"
    },
    {
      id: "3",
      email: "stefan.odendahl@netcetera.com",
      password: "hiosadhasc"
    },
    {
      id: "4",
      email: "peco.stanoev@netcetera.com",
      password: "hiosadhasc"
    },
    {
      id: "5",
      email: "lars.meijers@netcetera.com",
      password: "hiosadhasc"
    },
    {
      id: "6",
      email: "philippe.marchall@netcetera.com",
      password: "hiosadhasc"
    },
    {
      id: "7",
      email: "vladimir.trajkovski@netcetera.com",
      password: "hiosadhasc"
    },
    {
      id: "8",
      email: "thomas.wimmer@netcetera.com",
      password: "hiosadhasc"
    },
    {
      id: "9",
      email: "adreas.dejung@netcetera.com",
      password: "hiosadhasc"
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
