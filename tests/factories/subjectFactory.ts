import { getRepository } from "typeorm";

import Semester from "../../src/entities/semesters";
import Subject from "../../src/entities/subjects";

import { getFakeSubject } from '../utils/externalLibs/faker';

export async function createSubject(semester: Semester) {
  const subject = await getRepository(Subject).create(getFakeSubject(semester));

  await getRepository(Subject).save(subject);

  return subject;
}
