import { getRepository } from "typeorm";

import Category from '../../src/entities/categories';
import Professor from '../../src/entities/professors';
import ProfessorsAndSubjects from "../../src/entities/professorsAndSubjects";
import Semester from "../../src/entities/semesters";
import Subject from "../../src/entities/subjects";
import Test from '../../src/entities/tests';

export async function clearDatabase () {
  await getRepository(Test).delete({});
  await getRepository(ProfessorsAndSubjects).delete({});
  await getRepository(Category).delete({});
  await getRepository(Professor).delete({});
  await getRepository(Subject).delete({});
  await getRepository(Semester).delete({});
}
