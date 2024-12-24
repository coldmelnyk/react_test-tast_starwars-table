import React from 'react';
import { Person } from '../../types';

interface Props {
  person: Person;
  onShowPlanet: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PersonTab: React.FC<Props> = ({ person, onShowPlanet }) => {
  return (
    <div className='flex'>
      <div>
        {person.name} {person.gender} {person.birth_year}
      </div>
      <div onClick={() => onShowPlanet(true)}>Homeworld</div>
    </div>
  );
};
