import { Person } from '../types';
import { getPlanet } from './api';

export const getPlanetWithThePerson = (person: Person) => {
  return getPlanet(person.homeworld)
    .then(planet => ({
      ...person,
      planet,
    }))
    .catch(() => {
      alert(`Failed to get planet for ${person.name}`);

      return person;
    });
};