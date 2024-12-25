import { useEffect, useState } from 'react';
import { getPeople } from '../../utils/api';
import { Person, Planet } from '../../types';
import { PersonTab } from '../PersonTab';
import { PlanetTab } from '../Planet';
import { AnimatePresence, motion } from 'motion/react';
import { Error } from '../../enums';
import { getFiveRandomPeople, getPlanetWithThePerson } from '../../utils';
import { ErrorModal } from '../ErrorModal';

export const PeopleTable = () => {
  const [people, setPeople] = useState<Person[] | null>(null);
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null);
  const [isError, setIsError] = useState<Error>(Error.INITIAL);

  const arePeopleExist = people && isError === Error.SUCCESS;
  const isErrorTrue = isError === Error.ERROR_WHILE_FETCHING;

  useEffect(() => {
    setIsError(Error.LOADING);

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
        setIsError(Error.SUCCESS);
      })
      .catch(() => {
        setTimeout(() => {
          setIsError(Error.ERROR_WHILE_FETCHING);
        }, 2000);

        setTimeout(() => {
          setIsError(Error.INITIAL);
        }, 5000);
      });
  }, []);

  return (
    <>
      <AnimatePresence>
        {isErrorTrue && <ErrorModal />}

        {selectedPlanet && (
          <PlanetTab
            onSelectedPlanet={setSelectedPlanet}
            selectedPlanet={selectedPlanet}
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1, transition: { delay: 1 } }}
        className="p-3 rounded-lg md:mx-11 mx-4 shadow-md bg-white overflow-x-auto ring-1 ring-gray-900/5"
      >
        <table className="w-full min-w-[600px] border-collapse">
          <thead>
            <tr>
              <th className="font-bold pb-2 border-b-[1px] text-left">
                Character Name
              </th>
              <th className="font-bold pb-2 border-b-[1px] text-left">
                Gender
              </th>
              <th className="font-bold pb-2 border-b-[1px] text-left">
                Birth Year
              </th>
              <th className="font-bold pb-2 border-b-[1px] text-left">
                Home World
              </th>
            </tr>
          </thead>

          <tbody>
            {arePeopleExist &&
              people.map(person => (
                <PersonTab
                  key={person.name}
                  person={person}
                  people={people}
                  onSelectedPlanet={setSelectedPlanet}
                  selectedPlanet={selectedPlanet}
                />
              ))}
          </tbody>
        </table>
      </motion.div>
    </>
  );
};
