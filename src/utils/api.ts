import { Person, Planet } from '../types';

const BASE_URL = 'https://swapi.info/api';

function wait(delay: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

function get<T>(url: string): Promise<T> {
  const fullURL = `${BASE_URL}${url}`;

  return wait(300)
    .then(() => fetch(fullURL))
    .then(res => res.json());
}

export const getPeople = () => get<Person[]>('/people');

export const getPlanet = (url: string) => {
  const planetUrl = url.split('https://swapi.info/api')[1];

  return get<Planet>(planetUrl);
}

