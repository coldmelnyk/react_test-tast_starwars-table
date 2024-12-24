import React from 'react';

interface Props {
  onShowPlanet: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PlanetTab: React.FC<Props> = ({ onShowPlanet }) => {
  return (
    <div className="absolute text-white bg-gray-500 modal-center rounded-lg p-2 shadow-md">
      <div>Planet info modal comp</div>

      <div className='cursor-pointer' onClick={() => onShowPlanet(false)}>Close</div>
    </div>
  );
};
