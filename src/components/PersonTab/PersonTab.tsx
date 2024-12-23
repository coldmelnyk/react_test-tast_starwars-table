import React from "react";
import { Person } from "../../types";

interface Props {
  person: Person;
}

export const PersonTab: React.FC<Props> = ({ person }) => {
  return (
    <>
      <div>{person.name} {person.gender} {person.birth_year} {person.homeworld}</div>
    </>
  );
};
