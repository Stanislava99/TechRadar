import {prisma} from "~/db.server";
import type {Technology} from "@prisma/client"
import {Simulate} from "react-dom/test-utils";
import wheel = Simulate.wheel;

export async function getTechnologies() {
  return prisma.technology.findMany();
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


