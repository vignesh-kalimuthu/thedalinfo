import React from "react";
import jsonData from "./data.json";
import { Link } from "react-router-dom";

export function Banner() {
  return (
    <>
      {/* Banner */}
      {jsonData.map((data, index) => (
        <Link to="/calendar" key={index}>
          <div className="bg-red-900 p-4 flex flex-col justify-center">
          <button className="px-4 py-2 w-70 md:w-96 bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-500 rounded-full flex flex-row items-center justify-center mx-auto">
  <div className=" text-sm md:text-lg text-blue-500 font-semibold flex-shrink-0">இன்றைய நாள்</div>
  <div className="text-sm md:text-2xl text-blue-500 mx-2">|</div>
  <div className="text-sm md:text-lg text-blue-500 font-semibold flex-shrink-0">Today's Panchagam</div>
</button>


            <div className="mt-10 flex flex-row mx-auto space-x-10 md:space-x-80">
              <div className="text-sm md:text-lg text-white">{data["E Month"]},{data["E date"]}</div>
              <div className="text-sm md:text-lg text-white">{data["T Month"]},{data["T Date"]}</div>
            </div>
            <div className="mt-3 md:mt-5 mx-auto">
              <Link to="/calendar" className="text-yellow-400  text-lg">
                click here for more information
              </Link>
            </div>
          </div>
        </Link>
      ))}

      {/* Content */}
      <div className="min-h-screen">
        {/* Add your main content here */}
      </div>

      
      <div className="fixed bottom-4 flex justify-center items-center">
      <button className="px-4 py-2 w-70 md:w-96 bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-500 rounded-full flex flex-row items-center justify-center mx-auto">
  <div className=" text-sm md:text-lg text-blue-500 font-semibold flex-shrink-0">இன்றைய நாள்</div>
  <div className="text-sm md:text-2xl text-blue-500 mx-2">|</div>
  <div className="text-sm md:text-lg text-blue-500 font-semibold flex-shrink-0">Today's Panchagam</div>
</button>


      </div>
    </>
  );
}
