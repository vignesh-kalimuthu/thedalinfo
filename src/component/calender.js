
import jsonData from "./data.json";
import React, { useState } from "react";


export function Calender() {

    const [selectedOption, setSelectedOption] = useState("Today");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  }
    return (
      <>





 {/* Banner */}
 {jsonData.map((data,index)=>(
    
  <div className="bg-red-900 p-4 flex flex-col justify-center">
<button className="px-4 py-2 w-70 md:w-96 bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-500 rounded-full flex flex-row items-center justify-center mx-auto">
  <div className=" text-sm md:text-lg text-blue-500 font-semibold flex-shrink-0">இன்றைய நாள்</div>
  <div className="text-sm md:text-2xl text-blue-500 mx-2">|</div>
  <div className="text-sm md:text-lg text-blue-500 font-semibold flex-shrink-0">Today's Panchagam</div>
</button>

<div className="mt-2 md:mt-5 lg:mt-10 flex flex-col mx-auto ">
<div className="text-sm md:text-lg lg:text-xl text-yellow-200">{data["T Month"]}<span className="text-2xl text-yellow-500 ">/</span>{data["E Month"]},{data["E date"]}</div>
<hr className=" text-sm md:text-lg lg:text-xl border-yellow-200" />
<div className="text-sm md:text-lg lg:text-xl text-yellow-200">{data["T Day"]},{data["E Day"]}</div>
</div>

<div className="bg-red-900 p-1 md:p-2 lg:p-4  flex flex-col justify-center">
        <div className="mt-3 md:mt-10 flex flex-row space-x-4 md:space-x-20 mx-auto">
          <div
            className={`text-xs md:text-lg text-white ${selectedOption === "Previous Day" && "font-bold text-yellow-200"}`}
            onClick={() => handleOptionClick("Previous Day")}
          >
            Previous Day
          </div>
          <div
            className={`text-xs md:text-lg text-white ${selectedOption === "Yesterday" && "font-bold text-yellow-200"}`}
            onClick={() => handleOptionClick("Yesterday")}
          >
            Yesterday
          </div>
          <div
            className={`text-xs md:text-lg text-white ${selectedOption === "Today" && "font-bold text-yellow-200"}`}
            onClick={() => handleOptionClick("Today")}
          >
            Today
          </div>
          <div
            className={`text-xs md:text-lg text-white ${selectedOption === "Nextday" && "font-bold text-yellow-200"}`}
            onClick={() => handleOptionClick("Nextday")}
          >
            Nextday
          </div>
        </div>
        <hr className="mt-2 md:mt-4 mx-auto w-2/3 border-gray-300" />

       
        <div className="min-h-screen">
          
          {selectedOption === "Previous Day" && (
            <>
            <div className="mx-auto grid grid-cols-3 gap-1 md:gap-4  mt-3 md:mt-5">
              <div className="border border-black text-white flex flex-col justify-center items-center p-1 md:p-3">
                <p className="text-xs md:text-lg">சூரிய உதயம்</p>
                <span className="text-yellow-300 text-xs md:text-lg">{data["Sun Rise"]}</span>
                <p className="text-xs md:text-lg">Sun Rise</p>
              </div>
              <div className="border border-black text-white flex flex-col justify-center items-center p-1 md:p-3">
                <p className="text-xs md:text-lg">சூரிய அஸ்தமானம்</p>
                <span className="text-yellow-300 text-xs md:text-lg">{data["Sun Set"]}</span>
                <p className="text-xs md:text-lg">Sun Set</p>
              </div>
              <div className="border border-black text-white flex flex-col justify-center items-center p-1 md:p-3">
               <span className="text-yellow-300 text-xs md:text-lg">{data["T Month"]} {data["T Date"]}</span>
              </div>
            </div>
            <div className="mx-auto mt-2 md:mt-5">
            <div className="border border-black text-white flex flex-row justify-center items-center p-1 md:p-3 space-x-8">
             நக்ஷத்திரம்<span className="text-xl ">/</span>Star<span className="text-yellow-300 text-xs md:text-lg">{data.Star}</span>
           </div>
           
              <div className="mt-2 md:mt-5 border border-black text-white flex flex-row justify-center items-center p-3 space-x-8">
                <p className="text-xs md:text-lg">திதி thithi</p>
                <span className="text-yellow-300 text-xs md:text-lg">{data.Thithi}</span>
                <span className="text-white text-lg">|</span>
                <p className="text-xs md:text-lg">ஶ்ராத திதி Shratha Thithi</p>
                <span className="text-yellow-300 text-xs md:text-lg">{data["Shratha Thithi"]}</span>
              </div>
              <div className="mt-2 md:mt-5 mx-auto grid grid-cols-3 gap-1 md:gap-4">
                <div className="border border-black text-white flex flex-col justify-center items-center p-3">
                  <p className="text-xs md:text-lg">நல்ல நேரம்</p>
                  <span className="text-yellow-300 text-xs md:text-lg">{data["Auspicious Time"]}</span>
                  <p className="text-xs md:text-lg">Auspicious Time</p>
                </div>
                <div className="border border-black text-white flex flex-col justify-center items-center p-3">
                  <p className="text-xs md:text-lg">ராகு காலம்</p>
                  <span className="text-yellow-300 text-xs md:text-lg">{data["Rahu Kaalam"]}</span>
                  <p className="text-xs md:text-lg">Rahu Kaalam</p>
                </div>
                <div className="border border-black text-white flex flex-col justify-center items-center p-3">
                  <p className="text-xs md:text-lg">யம கண்டம்</p>
                  <span className="text-yellow-300 text-xs md:text-lg">{data["Yama Kandam"]}</span>
                  <p className="text-xs md:text-lg">Yama Kandam</p>
                </div>
              </div>
              <div className="mt-5 mx-auto grid grid-cols-2 gap-1 md:gap-4">
                <div className="border border-black text-white flex flex-col justify-center items-center p-3">
                  <p className="text-xs md:text-lg">சந்திராஷ்டமம்</p>
                  <p className="text-xs md:text-lg">Chandrashtamam</p>
                  <span className="text-yellow-300 text-xs md:text-lg">{data.Chandrashtamam}</span>
                </div>
                <div className="border border-black text-white flex flex-col justify-center items-center p-3">
                  <p className="text-xs md:text-lg">குளிகை</p>
                  <span className="text-yellow-300 text-xs md:text-lg">{data.Kuligai}</span>
                  <p className="text-xs md:text-lg">Kuligai</p>
                </div>
              </div>
            </div>
           </>
           
          )}
          {selectedOption === "Yesterday" && (
            <>
            <div className="mx-auto grid grid-cols-3 gap-1 md:gap-4  mt-3 md:mt-5">
              <div className="border border-black text-white flex flex-col justify-center items-center p-1 md:p-3">
                <p className="text-xs md:text-lg">சூரிய உதயம்</p>
                <span className="text-yellow-300 text-xs md:text-lg">{data["Sun Rise"]}</span>
                <p className="text-xs md:text-lg">Sun Rise</p>
              </div>
              <div className="border border-black text-white flex flex-col justify-center items-center p-1 md:p-3">
                <p className="text-xs md:text-lg">சூரிய அஸ்தமானம்</p>
                <span className="text-yellow-300 text-xs md:text-lg">{data["Sun Set"]}</span>
                <p className="text-xs md:text-lg">Sun Set</p>
              </div>
              <div className="border border-black text-white flex flex-col justify-center items-center p-1 md:p-3">
               <span className="text-yellow-300 text-xs md:text-lg">{data["T Month"]} {data["T Date"]}</span>
              </div>
            </div>
            <div className="mx-auto mt-2 md:mt-5">
            <div className="border border-black text-white flex flex-row justify-center items-center p-1 md:p-3 space-x-8">
             நக்ஷத்திரம்<span className="text-xl ">/</span>Star<span className="text-yellow-300 text-xs md:text-lg">{data.Star}</span>
           </div>
           
              <div className="mt-2 md:mt-5 border border-black text-white flex flex-row justify-center items-center p-3 space-x-8">
                <p className="text-xs md:text-lg">திதி thithi</p>
                <span className="text-yellow-300 text-xs md:text-lg">{data.Thithi}</span>
                <span className="text-white text-lg">|</span>
                <p className="text-xs md:text-lg">ஶ்ராத திதி Shratha Thithi</p>
                <span className="text-yellow-300 text-xs md:text-lg">{data["Shratha Thithi"]}</span>
              </div>
              <div className="mt-2 md:mt-5 mx-auto grid grid-cols-3 gap-1 md:gap-4">
                <div className="border border-black text-white flex flex-col justify-center items-center p-3">
                  <p className="text-xs md:text-lg">நல்ல நேரம்</p>
                  <span className="text-yellow-300 text-xs md:text-lg">{data["Auspicious Time"]}</span>
                  <p className="text-xs md:text-lg">Auspicious Time</p>
                </div>
                <div className="border border-black text-white flex flex-col justify-center items-center p-3">
                  <p className="text-xs md:text-lg">ராகு காலம்</p>
                  <span className="text-yellow-300 text-xs md:text-lg">{data["Rahu Kaalam"]}</span>
                  <p className="text-xs md:text-lg">Rahu Kaalam</p>
                </div>
                <div className="border border-black text-white flex flex-col justify-center items-center p-3">
                  <p className="text-xs md:text-lg">யம கண்டம்</p>
                  <span className="text-yellow-300 text-xs md:text-lg">{data["Yama Kandam"]}</span>
                  <p className="text-xs md:text-lg">Yama Kandam</p>
                </div>
              </div>
              <div className="mt-5 mx-auto grid grid-cols-2 gap-1 md:gap-4">
                <div className="border border-black text-white flex flex-col justify-center items-center p-3">
                  <p className="text-xs md:text-lg">சந்திராஷ்டமம்</p>
                  <p className="text-xs md:text-lg">Chandrashtamam</p>
                  <span className="text-yellow-300 text-xs md:text-lg">{data.Chandrashtamam}</span>
                </div>
                <div className="border border-black text-white flex flex-col justify-center items-center p-3">
                  <p className="text-xs md:text-lg">குளிகை</p>
                  <span className="text-yellow-300 text-xs md:text-lg">{data.Kuligai}</span>
                  <p className="text-xs md:text-lg">Kuligai</p>
                </div>
              </div>
            </div>
           </>
           
          )}
          {selectedOption === "Today" && (
 <>
 <div className="mx-auto grid grid-cols-3 gap-1 md:gap-4  mt-3 md:mt-5">
   <div className="border border-black text-white flex flex-col justify-center items-center p-1 md:p-3">
     <p className="text-xs md:text-lg">சூரிய உதயம்</p>
     <span className="text-yellow-300 text-xs md:text-lg">{data["Sun Rise"]}</span>
     <p className="text-xs md:text-lg">Sun Rise</p>
   </div>
   <div className="border border-black text-white flex flex-col justify-center items-center p-1 md:p-3">
     <p className="text-xs md:text-lg">சூரிய அஸ்தமானம்</p>
     <span className="text-yellow-300 text-xs md:text-lg">{data["Sun Set"]}</span>
     <p className="text-xs md:text-lg">Sun Set</p>
   </div>
   <div className="border border-black text-white flex flex-col justify-center items-center p-1 md:p-3">
    <span className="text-yellow-300 text-xs md:text-lg">{data["T Month"]} {data["T Date"]}</span>
   </div>
 </div>
 <div className="mx-auto mt-2 md:mt-5">
 <div className="border border-black text-white flex flex-row justify-center items-center p-1 md:p-3 space-x-8">
  நக்ஷத்திரம்<span className="text-xl ">/</span>Star<span className="text-yellow-300 text-xs md:text-lg">{data.Star}</span>
</div>

   <div className="mt-2 md:mt-5 border border-black text-white flex flex-row justify-center items-center p-3 space-x-8">
     <p className="text-xs md:text-lg">திதி thithi</p>
     <span className="text-yellow-300 text-xs md:text-lg">{data.Thithi}</span>
     <span className="text-white text-lg">|</span>
     <p className="text-xs md:text-lg">ஶ்ராத திதி Shratha Thithi</p>
     <span className="text-yellow-300 text-xs md:text-lg">{data["Shratha Thithi"]}</span>
   </div>
   <div className="mt-2 md:mt-5 mx-auto grid grid-cols-3 gap-1 md:gap-4">
     <div className="border border-black text-white flex flex-col justify-center items-center p-3">
       <p className="text-xs md:text-lg">நல்ல நேரம்</p>
       <span className="text-yellow-300 text-xs md:text-lg">{data["Auspicious Time"]}</span>
       <p className="text-xs md:text-lg">Auspicious Time</p>
     </div>
     <div className="border border-black text-white flex flex-col justify-center items-center p-3">
       <p className="text-xs md:text-lg">ராகு காலம்</p>
       <span className="text-yellow-300 text-xs md:text-lg">{data["Rahu Kaalam"]}</span>
       <p className="text-xs md:text-lg">Rahu Kaalam</p>
     </div>
     <div className="border border-black text-white flex flex-col justify-center items-center p-3">
       <p className="text-xs md:text-lg">யம கண்டம்</p>
       <span className="text-yellow-300 text-xs md:text-lg">{data["Yama Kandam"]}</span>
       <p className="text-xs md:text-lg">Yama Kandam</p>
     </div>
   </div>
   <div className="mt-5 mx-auto grid grid-cols-2 gap-1 md:gap-4">
     <div className="border border-black text-white flex flex-col justify-center items-center p-3">
       <p className="text-xs md:text-lg">சந்திராஷ்டமம்</p>
       <p className="text-xs md:text-lg">Chandrashtamam</p>
       <span className="text-yellow-300 text-xs md:text-lg">{data.Chandrashtamam}</span>
     </div>
     <div className="border border-black text-white flex flex-col justify-center items-center p-3">
       <p className="text-xs md:text-lg">குளிகை</p>
       <span className="text-yellow-300 text-xs md:text-lg">{data.Kuligai}</span>
       <p className="text-xs md:text-lg">Kuligai</p>
     </div>
   </div>
 </div>
</>

       
       
       
          )}
          {selectedOption === "Nextday" && (
           <>
           <div className="mx-auto grid grid-cols-3 gap-1 md:gap-4  mt-3 md:mt-5">
             <div className="border border-black text-white flex flex-col justify-center items-center p-1 md:p-3">
               <p className="text-xs md:text-lg">சூரிய உதயம்</p>
               <span className="text-yellow-300 text-xs md:text-lg">{data["Sun Rise"]}</span>
               <p className="text-xs md:text-lg">Sun Rise</p>
             </div>
             <div className="border border-black text-white flex flex-col justify-center items-center p-1 md:p-3">
               <p className="text-xs md:text-lg">சூரிய அஸ்தமானம்</p>
               <span className="text-yellow-300 text-xs md:text-lg">{data["Sun Set"]}</span>
               <p className="text-xs md:text-lg">Sun Set</p>
             </div>
             <div className="border border-black text-white flex flex-col justify-center items-center p-1 md:p-3">
              <span className="text-yellow-300 text-xs md:text-lg">{data["T Month"]} {data["T Date"]}</span>
             </div>
           </div>
           <div className="mx-auto mt-2 md:mt-5">
           <div className="border border-black text-white flex flex-row justify-center items-center p-1 md:p-3 space-x-8">
            நக்ஷத்திரம்<span className="text-xl ">/</span>Star<span className="text-yellow-300 text-xs md:text-lg">{data.Star}</span>
          </div>
          
             <div className="mt-2 md:mt-5 border border-black text-white flex flex-row justify-center items-center p-3 space-x-8">
               <p className="text-xs md:text-lg">திதி thithi</p>
               <span className="text-yellow-300 text-xs md:text-lg">{data.Thithi}</span>
               <span className="text-white text-lg">|</span>
               <p className="text-xs md:text-lg">ஶ்ராத திதி Shratha Thithi</p>
               <span className="text-yellow-300 text-xs md:text-lg">{data["Shratha Thithi"]}</span>
             </div>
             <div className="mt-2 md:mt-5 mx-auto grid grid-cols-3 gap-1 md:gap-4">
               <div className="border border-black text-white flex flex-col justify-center items-center p-3">
                 <p className="text-xs md:text-lg">நல்ல நேரம்</p>
                 <span className="text-yellow-300 text-xs md:text-lg">{data["Auspicious Time"]}</span>
                 <p className="text-xs md:text-lg">Auspicious Time</p>
               </div>
               <div className="border border-black text-white flex flex-col justify-center items-center p-3">
                 <p className="text-xs md:text-lg">ராகு காலம்</p>
                 <span className="text-yellow-300 text-xs md:text-lg">{data["Rahu Kaalam"]}</span>
                 <p className="text-xs md:text-lg">Rahu Kaalam</p>
               </div>
               <div className="border border-black text-white flex flex-col justify-center items-center p-3">
                 <p className="text-xs md:text-lg">யம கண்டம்</p>
                 <span className="text-yellow-300 text-xs md:text-lg">{data["Yama Kandam"]}</span>
                 <p className="text-xs md:text-lg">Yama Kandam</p>
               </div>
             </div>
             <div className="mt-5 mx-auto grid grid-cols-2 gap-1 md:gap-4">
               <div className="border border-black text-white flex flex-col justify-center items-center p-3">
                 <p className="text-xs md:text-lg">சந்திராஷ்டமம்</p>
                 <p className="text-xs md:text-lg">Chandrashtamam</p>
                 <span className="text-yellow-300 text-xs md:text-lg">{data.Chandrashtamam}</span>
               </div>
               <div className="border border-black text-white flex flex-col justify-center items-center p-3">
                 <p className="text-xs md:text-lg">குளிகை</p>
                 <span className="text-yellow-300 text-xs md:text-lg">{data.Kuligai}</span>
                 <p className="text-xs md:text-lg">Kuligai</p>
               </div>
             </div>
           </div>
          </>
          
          )}
        </div>
      </div>



<div className="mt-1 mx-auto  ">
<a href="#" className="text-yellow-400 text-lg">click here for more information</a>
</div>
</div>


))}

</>
  );
}
