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
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                    </svg>
                    <a href="https://a-it.vercel.app/">Vercel web Hosting </a>
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