import React from "react";


function ShowCase() {
    
    return (
       <div className="container mx-auto p-4  w-[92%]  mt-16">
            <div className="flex gap-10">
                <div>
                    <img src="Assets/project/18.png" alt="" />
                </div>
                <div className="w-2/3">
                    <p className="text-purple-800 font-bold text-2xl">
                        Rate My Dorm
                    </p>
                    <p className="mt-5">
                    Rate-My-dorm:  it is a platform that allow user post their dorm photo to website. It allow user vote which one is well organize and clean so among the people in school community can vote to finding a winner.
                    </p>

                    <div className="flex items-center justify-Start gap-10  mt-10">
                        <div>
                            <img className="rounded-md w-16" src="Assets/icons/7.png" alt="" />
                            <p className="mt-2 font-bold text-xs flex items-center justify-center">ReactJs</p>
                        </div>
                        <div>
                                <img className="rounded-md w-16" src="Assets/icons/11.png" alt="" />
                                <p className="mt-2 font-bold text-xs flex items-center justify-center">Django </p>
                        </div>
                        <div>
                                <img className="rounded-md w-16" src="Assets/icons/12.png" alt="" />
                                <p className="mt-2 font-bold text-xs flex items-center justify-center">Firebase</p>
                        </div>
                        <div>
                                <img className="rounded-md w-16" src="Assets/icons/16.png" alt="" />
                                <p className="mt-2 font-bold text-xs flex items-center justify-center">Tailwind</p>
                        </div>

                    </div>
                    <div className='flex gap-5 mt-9'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                        </svg>
                        <a href="https://github.com/Thea-zin/Rate-my-Dorm">Github</a>
                    </div>
                    <div className='flex gap-5 mt-9'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                        </svg>

                        <a href="https://www.figma.com/proto/2j4iW30sfmfYVFyJKwcfaU/U1ME?node-id=456-2&node-type=canvas&t=Q6VLee4jwceAvDAO-0&scaling=scale-down&content-scaling=fixed&page-id=415%3A2&starting-point-node-id=456%3A2">Preview</a>
                    </div>


                </div>

            </div>

       </div>
      );
    }
export default ShowCase;