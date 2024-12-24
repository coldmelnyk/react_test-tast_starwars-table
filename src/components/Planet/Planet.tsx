import React from 'react';

interface Props {
  onShowPlanet: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Planet: React.FC<Props> = ({ onShowPlanet }) => {
  return (
    <div className="absolute">
      <div>Planet modal comp</div>
      <div onClick={() => onShowPlanet(false)}>Close</div>
    </div>
  );
};
