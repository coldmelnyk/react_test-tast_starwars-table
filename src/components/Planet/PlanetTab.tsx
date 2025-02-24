import React from 'react';
import { Planet } from '../../types';
import { motion } from 'motion/react';

interface Props {
  onSelectedPlanet: React.Dispatch<React.SetStateAction<Planet | null>>;
  selectedPlanet: Planet | null;
}

export const PlanetTab: React.FC<Props> = ({
  onSelectedPlanet,
  selectedPlanet
}) => {
  const handleSelectedPlanet = () => onSelectedPlanet(null);

  return (
    <>
      {selectedPlanet && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.2 } }}
          exit={{ opacity: 0 }}
          className="absolute text-white bg-sky-500 shadow-lg ring-1 ring-gray-900/5 modal-center rounded-lg p-2 grid-for-modal z-50 text-wrap"
        >
          <div className="contents">
            <div>Name:</div>
            <div>{selectedPlanet.name}</div>
          </div>

          <div className="contents">
            <div>Climate:</div>
            <div>{selectedPlanet.climate}</div>
          </div>

          <div className="contents">
            <div>Terrain:</div>
            <div>{selectedPlanet.terrain}</div>
          </div>

          <div className="contents">
            <div>Population:</div>
            <div>{selectedPlanet.population}</div>
          </div>

          <button
            className="cursor-pointer mt-4 text-violet-100 animate-pulse"
            onClick={handleSelectedPlanet}
          >
            Close
          </button>
        </motion.div>
      )}
    </>
  );
};
