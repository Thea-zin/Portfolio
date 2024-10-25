import React from 'react';

function Tortbal() {
    return(
        <div className="container mx-auto p-4  w-[92%]  mt-16">
        <div className="flex gap-10">
            <div className="w-2/3">
                <p className="text-purple-800 font-bold text-2xl">
                    Tortbal App
                </p>
                <p className="mt-5">
               
                    Tortbal is an application where people can booking court online. And also as a pitch owner they are be able to getting booking notification through our app as well.
                </p>

                <div className="flex items-center justify-Start gap-10  mt-10">
                    <div>
                            <img className="rounded-md w-16" src="Assets/icons/9.png" alt="" />
                            <p className="mt-2 font-bold text-xs flex items-center justify-center">flutter</p>
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
                <div className='flex gap-5 mt-9'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                    </svg>
                    <a href="https://github.com/Thea-zin">Github</a>
                </div>

            </div>
            <div>
                <img src="Assets/project/19.png" alt="" />
            </div>

        </div>

   </div>
    )
}

export default Tortbal;