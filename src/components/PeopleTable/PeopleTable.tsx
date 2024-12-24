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

  const isPeopleExistAndHasOwnPlanets = people && people.every(person => person.planet);

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

  return (
    <>
      {showPlanet && <PlanetTab onShowPlanet={setShowPlanet} />}

      <div className="flex flex-col justify-center items-center p-3 mt-[20lvh] rounded-lg mx-11 shadow-md">
        <div className="grid grid-cols-4 gap-y-3 justify-between items-center min-w-full">
          <div>Character Name</div>
          <div>Gender</div>
          <div>Birth Year</div>
          <div>Home World</div>

          {isPeopleExistAndHasOwnPlanets && (
            <>
              {people.map(person => (
                <PersonTab
                  key={person.name}
                  person={person}
                  onShowPlanet={setShowPlanet}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};
