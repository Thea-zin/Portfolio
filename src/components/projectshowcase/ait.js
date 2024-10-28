import React from 'react';

function AIT() {
    return(
        <div className="container mx-auto p-4  w-[92%]  mt-16">

        <div className="flex gap-10">
            <div>
                <img src="Assets/project/20.png" alt="" />
            </div>
            <div className="w-2/3">
                <p className="text-purple-800 font-bold text-2xl">
                    AIT Project
                </p>
                <p className="mt-5">
                    Internal Client Project, Kirirom Institute of Technology
                    provide solution to business problems regarding their
                    software selection where people could not finding the right Software for their work flow. We using Gemini for comparison software for user need depending on their prompt
                </p>

                <div className="flex items-center justify-Start gap-10  mt-10">
                    <div>
                        <img className="rounded-md w-16" src="Assets/icons/8.png" alt="" />
                        <p className="mt-2 font-bold text-xs flex items-center justify-center">NextJs</p>
                    </div>
                    <div>
                            <img className="rounded-md w-16" src="Assets/icons/18.png" alt="" />
                            <p className="mt-2 font-bold text-xs flex items-center justify-center">Gemini </p>
                    </div>
                    <div>
                            <img className="rounded-md w-16" src="Assets/icons/12.png" alt="" />
                            <p className="mt-2 font-bold text-xs flex items-center justify-center">Firebase</p>
                    </div>

                </div>
                <div className='flex gap-5 mt-9'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                    </svg>
                    <a href="https://a-it.vercel.app/">Preview on vercel</a>
                </div>

            </div>
            
        </div>
        <div className="flex gap-2 items-center justify-center mt-9">
              <p className="text-3xl font-bold">
                Looking for  
              </p>
              <p className="text-3xl font-bold text-gray-600">
                Achievements ?
              </p>
         </div>

   </div>
    )
}

export default AIT;