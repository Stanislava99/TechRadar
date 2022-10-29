import {prisma} from "~/db.server";
import type {Technology} from "@prisma/client"

export async function getTechnologies() {
  const technologies: Array<Technology> =  await prisma.technology.findMany();
  for (const technology of technologies) {
    const userId = technology.userId;
    const technologyId = technology.id;
    const user = await prisma.user.findUnique({where: {id: userId}});
    // @ts-ignore
    const userEmail = user.email;
    technology.userId=userEmail;
    const whereToTryListOfObjects = await getWhereToTry(technologyId);
    const whereToTryListOfEnums = whereToTryListOfObjects
      .map(whereToTryObject => whereToTryObject.whereToTry);
    technology.whereToTryList = whereToTryListOfEnums;
  }
  return  technologies;
}

export async function getTechnology(id: string) {
  // @ts-ignore
  return prisma.technology.findUnique({where: {id}});
}
export async function createTechnology (
  technology: Technology
){
  return prisma.technology.create({data: technology});
}

export async function getTechUserName (userId: string){
  // @ts-ignore
  const user = prisma.user.findUnique({where: {id: userId}});
  console.log(user);
  return user;
}

export async function getWhereToTry(id: string){
  return prisma.whereToTryTechnology.findMany({where: {technologyId: id}});
}

// @ts-ignore
export async function addTechnology (technology: Pick<Technology,"name" | "linkToTechnology" | "userId" | "description" | "type" >) {
  // @ts-ignore
  return prisma.technology.create({data: technology});
}

export async function addTechnologyToWhereToTryTable(technologiesArray: Array<string>, technologyId: string) {
  for (const where of technologiesArray){
    const whereToTryTechnology = {
      whereToTry: where,
      technologyId: technologyId
    }
    await prisma.whereToTryTechnology.create({data: whereToTryTechnology})
  }
}