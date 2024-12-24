import React from 'react';
import { Person } from '../../types';

interface Props {
  person: Person;
  onShowPlanet: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PersonTab: React.FC<Props> = ({ person, onShowPlanet }) => {
  return (
    <>
      <div>{person.name}</div>
      <div> {person.gender}</div>
      <div>{person.birth_year}</div>
      <div onClick={() => onShowPlanet(true)}>{person.planet?.name}</div>
    </>
  );
};
