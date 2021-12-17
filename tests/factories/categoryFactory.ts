import { getRepository } from "typeorm";

import Category from "../../src/entities/categories";

import { getFakeCategory } from '../../src/utils/externalLibs/faker';

export async function createCategory () {
  const category = await getRepository(Category).create(getFakeCategory());

  await getRepository(Category).save(category);

  return category;
}
