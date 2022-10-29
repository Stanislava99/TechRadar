import {prisma} from "~/db.server";
import type {Technology} from "@prisma/client"

export async function getAllTechnologies() {
  return prisma.technology.findMany();
}
export async function getTechnology(id: string) {
  return prisma.technology.findUnique({where: {id}});
}
export async function createTechnology (
  technology: Technology
){
  return prisma.technology.create({data: technology});
}
