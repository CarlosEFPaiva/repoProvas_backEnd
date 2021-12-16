import { getRepository } from 'typeorm';
import Category from '../entities/categories';
import Subject from '../entities/subjects';

export async function getInitialOptions() {
    const subjects = await getRepository(Subject)
        .find();
    const categories = await getRepository(Category)
        .find();
    const years = [];
    for (let i = 2000; i <= new Date().getFullYear(); i++) {
        years.push(i);
    }
    const semesters = [1, 2];
    return {
        years,
        semesters,
        categories: categories.map(({ name }) => name),
        subjects: subjects.map(({ name }) => name),
    };
}
