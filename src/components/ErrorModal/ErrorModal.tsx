import { motion } from 'motion/react';

export const ErrorModal = () => {
  return (
    <motion.aside
      initial={{ opacity: 0, top: 80 }}
      animate={{ opacity: 1, top: 100, transition: { duration: 0.3 } }}
      exit={{ opacity: 0, top: 80, transition: { duration: 0.3 } }}
      className="absolute text-white bg-red-500 p-6 top-[100px] left-[50%] translate-x-[-50%]"
    >
      Opps, can't get data from server :(
    </motion.aside>
  );
};
