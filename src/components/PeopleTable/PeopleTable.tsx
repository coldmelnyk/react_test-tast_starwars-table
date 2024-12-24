import { useEffect, useState } from 'react';
import { getPeople } from '../../utils/api';
import { Person } from '../../types';
import { PersonTab } from '../PersonTab';
import { PlanetTab } from '../Planet';
import { getFiveRandomPeople } from '../../utils/getFiveRandomPeople';
import { getPlanetWithThePerson } from '../../utils/getPlanetWithThePerson';

export const PeopleTable = () => {
  const [people, setPeople] = useState<Person[] | null>(null);
  const [showPlanet, setShowPlanet] = useState(false);

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
      {showPlanet && <PlanetTab onShowPlanet={setShowPlanet} />}

      <div className="p-3 rounded-lg mx-11 shadow-md bg-white">
        <div className="grid grid-cols-4 w-full">
          <div className='contents'>
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
                onShowPlanet={setShowPlanet}
              />
            ))}
        </div>
      </div>
    </>
  );
};
