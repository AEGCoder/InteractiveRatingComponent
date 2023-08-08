import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import {Link} from 'react-router-dom';
const HomePage = ({selected,setSelected}) => {
  


  return (
    <div className="flex h-screen bg-gray-900 items-center justify-center">
      <div className="flex flex-col items-start p-5 justify-between border border-white md:w-[30rem] w-[20rem] md:h-[25rem] h-[30rem] rounded-lg shadow-md shadow-white">
        <span className="text-yellow-600 text-2xl bg-gray-600 p-3 rounded-full">
          <BsFillStarFill />{" "}
        </span>
        <h1 className="text-white text-2xl font-bold tracking-wide">
          How did we do ?
        </h1>
        <span className="text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <ul className="flex items-center justify-center w-full md:gap-x-8 gap-x-3">
         {
            [1,2,3,4,5].map((item,index) => (
              <li key={index} onClick={() => setSelected(item)} className={`md:text-4xl text-xl bg-gray-600 py-1 px-4 rounded-full text-yellow-500 cursor-pointer ${selected === item ? "text-blue-500" : "text-gray-400"}`}>
                {item}
              </li>
            ))
         }
        </ul>
        <Link to="/result"
         className="bg-white w-full text-center rounded-2xl hover:bg-yellow-800 hover:text-white transition-all duration-300 text-orange-500 px-5 py-2 font-bold tracking-wide">
          Submit
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
