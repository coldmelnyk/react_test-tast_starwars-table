import { Person, Planet } from '../types';

const BASE_URL = 'https://swapi.info/api';

function wait(delay: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

function get<T>(url: string): Promise<T> {
  const fullURL = `${BASE_URL}${url}`;

  return wait(600)
    .then(() => fetch(fullURL))
    .then(res => res.json());
}

export const getPeople = () => get<Person[]>('/people');

export const getPlanet = (planetId: number) =>
  get<Planet>(`/planets/${planetId}`);
