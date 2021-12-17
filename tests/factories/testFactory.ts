import { getRepository } from "typeorm";
import { CreateTestParameters } from "../testProtocols/testParameters";

import Test from "../../src/entities/tests";

import { getFakeTest } from '../utils/externalLibs/faker';

export async function createTest(testParameters: CreateTestParameters) {
  const test = await getRepository(Test).create(getFakeTest(testParameters));
  try {
    await getRepository(Test).save(test);
  } finally {
    return test.adjustForFinalUser();
  }
}