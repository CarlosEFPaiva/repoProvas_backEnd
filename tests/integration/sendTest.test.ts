/* eslint-disable no-undef */

import supertest from "supertest";
import { getConnection } from "typeorm";

import app, { init } from "../../src/app";
import { clearDatabase } from "../utils/database";
import { getDifferentNumber, getInitialOptions, getTestingParameters, getValidTestBody } from "../factories/auxiliarTestFactory";
import { TestingParameters } from "../testProtocols/testParameters";

let testingParameters: TestingParameters;
jest.setTimeout(20 * 1000);

beforeAll(async () => {
  await init();
  testingParameters = await getTestingParameters();
});

afterAll(async () => {
  jest.setTimeout(5000);
  await clearDatabase();
  await getConnection().close();
});

describe("/send-test", () => {

  describe('GET /initial-options', () => {

    it("should answer with initial options and status 200", async () => {

      const result = await supertest(app).get('/send-test/initial-options');

      const expectedResult = getInitialOptions(
        [testingParameters.subject1, testingParameters.subject2],
        [testingParameters.category1, testingParameters.category2]
      );

      expect(result.body).toEqual(expectedResult);

      expect(result.status).toBe(200);
    });
  })

  describe('GET /professors/:id', () => {

    it("should answer with professors and status 200", async () => {

      const result = await supertest(app).get(`/send-test/professors/${testingParameters.subject1.id}`);

      const expectedResult = {professors: [testingParameters.professor1.name]};

      expect(result.body).toEqual(expectedResult);
      expect(result.status).toBe(200);
    });

    it("input error: should answer with status 400", async () => {

      const result = await supertest(app).get(`/send-test/professors/notANumber`);

      expect(result.status).toBe(400);
    });

    it("Subject error: should answer with status 404", async () => {

      const invalidId = getDifferentNumber([testingParameters.subject1.id, testingParameters.subject2.id]);

      const result = await supertest(app).get(`/send-test/professors/${invalidId}`);

      expect(result.status).toBe(404);
    });
  });

  describe('POST "/" ', () => {

    it("input error: should answer with status 400", async () => {

      const result = await supertest(app).post('/send-test').send({year:2000, semester: 1, category: 'Invalid-Category'});

      expect(result.status).toBe(400);
    });

    it("should answer status 201", async () => {

      const newTestParameters = {
        year: 2020,
        semester: 1,
        category: testingParameters.category1,
        professorsAndSubjects: testingParameters.professorAndSubject1,
      }

      const validTestBody = getValidTestBody(newTestParameters);

      const result = await supertest(app).post('/send-test').send(validTestBody);

      expect(result.status).toBe(201);
    });

    it("conflict Error: should answer status 409", async () => {

      const newTestParameters = {
        year: 2020,
        semester: 1,
        category: testingParameters.category1,
        professorsAndSubjects: testingParameters.professorAndSubject1,
      }

      const validTestBody = getValidTestBody(newTestParameters);

      const result = await supertest(app).post('/send-test').send(validTestBody);

      expect(result.status).toBe(409);
    });

  });
});
