import React from 'react';
import { Person } from '../../types';
import cn from 'classnames';

interface Props {
  person: Person;
  people: Person[];
  onShowPlanet: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PersonTab: React.FC<Props> = ({
  person,
  people,
  onShowPlanet
}) => {
  const isLastPerson = person === people[people.length - 1];

  return (
    <>
      <div
        className={cn({
          'border-b-0 pb-0 pt-2': isLastPerson,
          'py-2 border-b-[1px]': !isLastPerson,
        })}
      >
        {person.name}
      </div>

      <div
        className={cn({
          'border-b-0 pb-0 pt-2': isLastPerson,
          'py-2 border-b-[1px]': !isLastPerson,
        })}
      >
        {person.gender}
      </div>

      <div
        className={cn({
          'border-b-0 pb-0 pt-2': isLastPerson,
          'py-2 border-b-[1px]': !isLastPerson,
        })}
      >
        {person.birth_year}
      </div>

      <div
        className={cn('cursor-pointer', {
          'border-b-0 pb-0 pt-2': isLastPerson,
          'py-2 border-b-[1px]': !isLastPerson,
        })}
        onClick={() => onShowPlanet(status => !status)}
      >
        {person.planet?.name}
      </div>
    </>
  );
};
