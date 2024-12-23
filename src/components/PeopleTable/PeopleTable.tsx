import { useEffect, useState } from 'react';
import { getPeople } from '../../utils/api';
import { Person } from '../../types';
import { PersonTab } from '../PersonTab';

export const PeopleTable = () => {
  const [people, setPeople] = useState<Person[] | null>(null);

  useEffect(() => {
    getPeople()
      .then(people => {
        setPeople(people);
      })
      .catch(error => {
        alert(error);
      });
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center p-7 mt-[20lvh]">
        People Table comp

        {people?.map(person => (
          <PersonTab key={person.name} person={person} />
        ))}
      </div>
    </>
  );
};
