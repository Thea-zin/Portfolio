import React from "react";
import IconList from "./Callicon/iconlist";

function Technology() {
  return (
    <div className="container mx-auto  p-4  w-[92%] mt-16">

        <div >
            <p className="bg-slate-500 w-32 rounded-2xl p-1 text-center font-bold mx-auto mt-10 text-xs">
              Skills
            </p>
            <p className="text-center mx-auto mt-3">
              The skills, tools and technologies I am really good at: 
            </p>
        </div>
        
        <div className="flex items-center justify-center gap-10 mt-10">
          <div>
               <img className="rounded-md w-16" src="Assets/icons/7.png" alt="" />
               <p className="mt-2 font-bold text-xs flex items-center justify-center">ReactJs</p>

            </div>
          <div>
                <img className="rounded-md w-16" src="Assets/icons/8.png" alt="" />
                <p className="mt-2 font-bold text-xs flex items-center justify-center">NextJs</p>
            </div>
          <div>
                <img className="rounded-md w-16" src="Assets/icons/9.png" alt="" />
                <p className="mt-2 font-bold text-xs flex items-center justify-center">flutter</p>
          </div>
          <div>
                 <img className="rounded-md w-16" src="Assets/icons/10.png" alt="" />
                 <p className="mt-2 font-bold text-xs flex items-center justify-center">Swift</p>
          </div>
          <div>
                 <img className="rounded-md w-16" src="Assets/icons/11.png" alt="" />
                 <p className="mt-2 font-bold text-xs flex items-center justify-center">Django </p>
          </div>
          <div>
                  <img className="rounded-md w-16" src="Assets/icons/12.png" alt="" />
                  <p className="mt-2 font-bold text-xs flex items-center justify-center">Firebase</p>
          </div>
        </div>
        <div className="flex flex-cols-3 justify-center  gap-10 mt-10 ">
          <div>
                <img className="rounded-md w-16" src="Assets/icons/13.png" alt="" />
               <p className="mt-2 font-bold text-xs flex items-center justify-center">NodeJs</p>
          </div>
          <div>
                <img className="rounded-md w-16" src="Assets/icons/14.png" alt="" />
                <p className="mt-2 font-bold text-xs flex items-center justify-center">MySQl</p>
          </div>

          <div>
               <img className="rounded-md w-16" src="Assets/icons/15.png" alt="" />
                <p className="mt-2 font-bold text-xs flex items-center justify-center">Postgress</p>
          </div>
          <div>
                <img className="rounded-md w-16" src="Assets/icons/16.png" alt="" />
                <p className="mt-2 font-bold text-xs flex items-center justify-center">Tailwind</p>
          </div>
          <div>
                <img className="rounded-md w-16" src="Assets/icons/17.png" alt="" />
                <p className="mt-2 font-bold text-xs flex items-center justify-center">TypeScript</p>
          </div>
            
            
        </div>
       
         <div className="flex gap-2 items-center justify-center mt-9">
              <p className="text-3xl font-bold">
                Looking for  
              </p>
              <p className="text-3xl font-bold text-gray-600">
                Project
              </p>
         </div>

    </div>
    
  );
}

export default Technology;