import { Person } from '../types';
import { getRandomFiveNumbers } from './getRandomFiveNumbers';

export const getFiveRandomPeople = (people: Person[]) => {
  const randomFivePeople: Array<Person> = [];
  const randomFiveIndexes = getRandomFiveNumbers(0, people.length - 1);

  randomFiveIndexes.forEach(index => {
    randomFivePeople.push(people[index]);
  });

  return randomFivePeople;
};
