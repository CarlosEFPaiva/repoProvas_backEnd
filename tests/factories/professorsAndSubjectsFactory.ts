import { getRepository } from "typeorm";

import ProfessorsAndSubjects from "../../src/entities/professorsAndSubjects";
import Professor from "../../src/entities/professors";
import Subject from "../../src/entities/subjects";

export async function createProfessorAndSubject(subject: Subject, professor: Professor) {
  const professorAndSubject = await getRepository(ProfessorsAndSubjects).create({subject, professor});

  await getRepository(ProfessorsAndSubjects).save(professorAndSubject);

  return professorAndSubject;
}
