import React from "react";
import { FcKey } from "react-icons/fc";
import {AiFillHome} from 'react-icons/ai';
import {Link} from 'react-router-dom';
const ResultPage = ({selected}) => {
  return (
    <div className="flex h-screen bg-gray-900 items-center relative justify-center">
      <div className="flex flex-col items-center md:p-10 p-2 text-center text-gray-500 justify-center gap-y-7 border border-white md:w-[30rem] w-[20rem] md:h-[25rem] h-[30rem] rounded-lg shadow-md shadow-white">
        <span>
          <FcKey size={60} />
        </span>
        <h1 className="text-orange-500 bg-gray-700 py-2 px-9 rounded-full">Your Selected {selected} out of 5</h1>
        <h1 className="text-2xl text-white font-bold tracking-wider">Thank You!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="absolute top-10 left-10">
         <Link to="/">
          <AiFillHome size={40} className="text-white"/>
         </Link>
      </div>
    </div>
  );
};

export default ResultPage;
