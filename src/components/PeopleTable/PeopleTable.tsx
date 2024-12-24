import { useEffect, useState } from 'react';
import { getPeople } from '../../utils/api';
import { Person, Planet } from '../../types';
import { PersonTab } from '../PersonTab';
import { PlanetTab } from '../Planet';
import { getFiveRandomPeople } from '../../utils/getFiveRandomPeople';
import { getPlanetWithThePerson } from '../../utils/getPlanetWithThePerson';

export const PeopleTable = () => {
  const [people, setPeople] = useState<Person[] | null>(null);
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null);

  const isPeopleExistAndHasOwnPlanets =
    people && people.every(person => person.planet);

  useEffect(() => {
    getPeople()
      .then(people => {
        const fiveRandomPeople = getFiveRandomPeople(people);

        const peopleWithPlanets = fiveRandomPeople.map(person =>
          getPlanetWithThePerson(person)
        );

        return Promise.all(peopleWithPlanets);
      })
      .then(peopleWithPlanets => {
        setPeople(peopleWithPlanets);
      })
      .catch(error => {
        alert(error);
      });
  }, []);

  console.log('people', people);

  return (
    <>
      {selectedPlanet && (
        <PlanetTab onSelectedPlanet={setSelectedPlanet} selectedPlanet={selectedPlanet} />
      )}

      <div className="p-3 rounded-lg mx-11 shadow-md bg-white overflow-x-auto">
        <div className="grid grid-cols-4 w-full min-w-[600px]">
          <div className="contents">
            <div className="font-bold pb-2 border-b-[1px]">Character Name</div>
            <div className="font-bold pb-2 border-b-[1px]">Gender</div>
            <div className="font-bold pb-2 border-b-[1px]">Birth Year</div>
            <div className="font-bold pb-2 border-b-[1px]">Home World</div>
          </div>

          {isPeopleExistAndHasOwnPlanets &&
            people.map(person => (
              <PersonTab
                key={person.name}
                person={person}
                people={people}
                onSelectedPlanet={setSelectedPlanet}
                selectedPlanet={selectedPlanet}
              />
            ))}
        </div>
      </div>
    </>
  );
};
