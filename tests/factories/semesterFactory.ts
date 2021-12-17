import { getRepository } from "typeorm";

import Semester from "../../src/entities/semesters";

import { getFakeSemester } from '../utils/externalLibs/faker';

export async function createSemester() {
  const semester = await getRepository(Semester).create(getFakeSemester());

  await getRepository(Semester).save(semester);

  return semester;
}
