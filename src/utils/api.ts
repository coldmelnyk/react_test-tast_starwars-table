import { People, Planet } from '../types';

const BASE_URL = 'https://swapi.info/api';

// This function creates a promise
// that is resolved after a given delay
function wait(delay: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

function get<T>(url: string): Promise<T> {
  const fullURL = `${BASE_URL}${url}.json`;

  // we add some delay to see how the loader works
  return wait(300)
    .then(() => fetch(fullURL))
    .then(res => res.json());
}

export const getPeople = () => get<People[]>('/people');

export const getPlanet = (planetId: number) =>
  get<Planet>(`/planets/${planetId}`);
