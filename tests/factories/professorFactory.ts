import { getRepository } from "typeorm";

import Professor from "../../src/entities/professors";

import { getFakeProfessor } from '../utils/externalLibs/faker';

export async function createProfessor():Promise<Professor> {
  const professor = await getRepository(Professor).create(getFakeProfessor());

  await getRepository(Professor).save(professor);

  return professor;
}

export async function createAnotherProfessor() {
  const professor = await createProfessor();
  return professor;
}