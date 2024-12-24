import React from 'react';
import { Planet } from '../../types';

interface Props {
  onSelectedPlanet: React.Dispatch<React.SetStateAction<Planet | null>>;
  selectedPlanet: Planet | null;
}

export const PlanetTab: React.FC<Props> = ({ onSelectedPlanet, selectedPlanet }) => {
  const handleSelectedPlanet = () => onSelectedPlanet(null);

  return (
    <div className="absolute text-white bg-gray-500 modal-center rounded-lg p-2 shadow-md">
      <div>{selectedPlanet?.name}</div>

      <div className='cursor-pointer' onClick={handleSelectedPlanet}>Close</div>
    </div>
  );
};
