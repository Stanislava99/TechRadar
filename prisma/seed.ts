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

  const technologyAssessmentResults = [{id: "1"}];
  const technologies = [
    {
      id:"1",
      entryDate: "1997-07-16T19:20:30.451Z",
      technologyName: "Blazor",
      linkToTechnology: "https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor",
      userId: user.id,
      description: "Build client apps with subset of the .NET framework. The app compiles to web assembly. There are also a lot of open source widget libraries that are available. Can be distributed as server side rendered content (Blazor Server) or PWA (works entirely in browser and just consumes REST API).\n",
      assesmentResultId: "1",
      type: "LANGUAGES"
    },
    {
      id: "2",
      entryDate: "1997-07-16T19:20:30.451Z",
      technologyName: "Blazor",
      linkToTechnology: "https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor",
      userId: user.id,
      description: "Build client apps with subset of the .NET framework. The app compiles to web assembly. There are also a lot of open source widget libraries that are available. Can be distributed as server side rendered content (Blazor Server) or PWA (works entirely in browser and just consumes REST API).\n",
      assesmentResultId: "1",
      type: "LANGUAGES"
    }
  ];

  for (const technologyAssessmentResult of technologyAssessmentResults) {
    // @ts-ignore
    await prisma.technologyAssessmentResult.upsert({
      where: {id: technologyAssessmentResult.id},
      create: technologyAssessmentResult,
      update: technologyAssessmentResult
    });
  }

  for (const technology of technologies) {
    await prisma.technology.upsert({
      where: {id: technology.id},
      create: technology,
      update: technology
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
