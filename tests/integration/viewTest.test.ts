/* eslint-disable no-undef */

import supertest from "supertest";
import { getConnection } from "typeorm";

import app, { init } from "../../src/app";
import { clearDatabase } from "../utils/database";
import { getDifferentNumber, getTestingParameters } from "../factories/auxiliarTestFactory";
import { TestForFinalUser, TestingParameters } from "../testProtocols/testParameters";
import { createTest } from "../factories/testFactory";

let testingParameters: TestingParameters;
let test1: TestForFinalUser;
let test2: TestForFinalUser;
jest.setTimeout(20 * 1000);

beforeAll(async () => {
  await init();
  testingParameters = await getTestingParameters();
  test1 = await createTest({
    category: testingParameters.category1,
    professorsAndSubjects: testingParameters.professorAndSubject1
  });
  test2 = await createTest({
    category: testingParameters.category2,
    professorsAndSubjects: testingParameters.professorAndSubject2
  });
});

afterAll(async () => {
  jest.setTimeout(5000);
  await clearDatabase();
  await getConnection().close();
});

describe("/view-test", () => {

  describe('GET /initial-options/professors', () => {

    it("should answer with initial options by professors and status 200", async () => {

      const result = await supertest(app).get('/view-test/initial-options/professors');

      const expectedResult = [
        { id: testingParameters.professor1.id, name: testingParameters.professor1.name, tests: 1 },
        { id: testingParameters.professor2.id, name: testingParameters.professor2.name, tests: 1 },
      ];

      expect(result.body).toEqual(expectedResult);

      expect(result.status).toBe(200);
    });
  })

  describe('GET /initial-options/subjects', () => {

    it("should answer with initial options by subjects and status 200", async () => {

      const result = await supertest(app).get('/view-test/initial-options/subjects');

      const expectedResult = [
        {
          id: testingParameters.subject1.id,
          name: testingParameters.subject1.name,
          semester: testingParameters.semester1,
          tests: 1
        },
        {
          id: testingParameters.subject2.id,
          name: testingParameters.subject2.name,
          semester: testingParameters.semester2,
          tests: 1
        },
      ];

      expect(result.body).toEqual(expectedResult);

      expect(result.status).toBe(200);
    });
  })

  describe('GET /by-professor/:professorId', () => {

    it("should answer with tests and status 200", async () => {

      const result = await supertest(app).get(`/view-test/by-professor/${testingParameters.professor1.id}`);
      const expectedResult = [test1];

      expect(result.body.tests).toEqual(expectedResult);
      expect(result.status).toBe(200);
    });

    it("input error: should answer with status 400", async () => {

      const result = await supertest(app).get(`/view-test/by-professor/notANumber`);

      expect(result.status).toBe(400);
    });

    it("ProfessorId error: should answer with status 404", async () => {

      const invalidId = getDifferentNumber([testingParameters.professor1.id, testingParameters.professor2.id]);

      const result = await supertest(app).get(`/view-test/by-professor/${invalidId}`);

      expect(result.status).toBe(404);
    });
  });

  describe('GET /by-subject/:subjectId', () => {

    it("should answer with tests and status 200", async () => {

      const result = await supertest(app).get(`/view-test/by-subject/${testingParameters.subject1.id}`);
      const expectedResult = [test1];

      expect(result.body.tests).toEqual(expectedResult);
      expect(result.status).toBe(200);
    });

    it("input error: should answer with status 400", async () => {

      const result = await supertest(app).get(`/view-test/by-subject/notANumber`);

      expect(result.status).toBe(400);
    });

    it("SubjectId error: should answer with status 404", async () => {

      const invalidId = getDifferentNumber([testingParameters.subject1.id, testingParameters.subject2.id]);

      const result = await supertest(app).get(`/view-test/by-subject/${invalidId}`);

      expect(result.status).toBe(404);
    });
  });

});
