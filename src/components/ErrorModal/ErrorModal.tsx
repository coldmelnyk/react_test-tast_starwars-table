import React from "react";

interface Props {
  error: string;
}

export const ErrorModal: React.FC<Props> = ({ error }) => {
  return (
    <div className="absolute text-white bg-red-500 p-6 top-0 left-[50%] translate-x-[-50%]">
      {error}
    </div>
  );
};