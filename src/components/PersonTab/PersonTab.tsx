import React from 'react';
import { Person, Planet } from '../../types';
import cn from 'classnames';

interface Props {
  person: Person;
  people: Person[];
  onSelectedPlanet: React.Dispatch<React.SetStateAction<Planet | null>>;
  selectedPlanet: Planet | null;
}

export const PersonTab: React.FC<Props> = ({
  person,
  people,
  onSelectedPlanet,
  selectedPlanet,
}) => {
  const isLastPerson = person === people[people.length - 1];
  const handleSelectedPlanet = (planet: Planet) => {
    if (selectedPlanet === planet) {
      onSelectedPlanet(null);
    }

    if (selectedPlanet !== planet) {
      onSelectedPlanet(planet);
    }
  };

  return (
    <>
      <div className="contents">
        <div
          className={cn({
            'border-b-0 pb-0 pt-2': isLastPerson,
            'py-2 border-b-[1px]': !isLastPerson
          })}
        >
          {person.name}
        </div>

        <div
          className={cn({
            'border-b-0 pb-0 pt-2': isLastPerson,
            'py-2 border-b-[1px]': !isLastPerson
          })}
        >
          {person.gender}
        </div>

        <div
          className={cn({
            'border-b-0 pb-0 pt-2': isLastPerson,
            'py-2 border-b-[1px]': !isLastPerson
          })}
        >
          {person.birth_year}
        </div>

        <div
          className={cn('cursor-pointer', {
            'border-b-0 pb-0 pt-2': isLastPerson,
            'py-2 border-b-[1px]': !isLastPerson
          })}
          onClick={() => handleSelectedPlanet(person.planet!)}
        >
          <span className='block animate-pulse'>{person.planet?.name}</span>
        </div>
      </div>
    </>
  );
};
