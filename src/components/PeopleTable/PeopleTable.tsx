import { useEffect, useState } from 'react';
import { getPeople } from '../../utils/api';
import { Person } from '../../types';
import { PersonTab } from '../PersonTab';
import { getRandomFiveNumbers } from '../../utils/getRandomFiveNumbers';
import { Planet } from '../Planet';

export const PeopleTable = () => {
  const [people, setPeople] = useState<Person[] | null>(null);
  const [showPlanet, setShowPlanet] = useState(false);

  useEffect(() => {
    getPeople()
      .then(people => {
        const randomFivePeople: Array<Person> = [];
        const randomFiveIndexes = getRandomFiveNumbers(0, people.length - 1);
        randomFiveIndexes.forEach(index => {
          randomFivePeople.push(people[index]);
        });

        setPeople(randomFivePeople);
      })
      .catch(error => {
        alert(error);
      });
  }, []);

  return (
    <>
      {showPlanet && <Planet onShowPlanet={setShowPlanet}/>}

      <div className="flex flex-col justify-center items-center p-7 mt-[20lvh]">
        People Table comp

        {people?.map(person => (
          <PersonTab key={person.name} person={person} onShowPlanet={setShowPlanet} />
        ))}
      </div>
    </>
  );
};
