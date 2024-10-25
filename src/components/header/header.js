import React from "react";

function Header() {
    return (
        <header className="bg-black text-white">
            <div className="container mx-auto p-4 flex items-center justify-between w-[92%] ">
                <div>
                        <h1 className="text-2xl font-bold">
                            Sothea Dev.
                        </h1>
                </div>
                <nav className=" ">
                        <ul className="flex items-center gap-7 ">
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Work</a>
                            </li>
                            <li>
                                <a href="#">Testimonials</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                            <li>
                                <p>/</p>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                                </svg>
                            </li>
                            <li>
                                <a href="#" className="bg-white rounded-lg text-black p-2">Download CV</a>
                            </li>
                        </ul>
                </nav>
             </div> 

        </header>
    )
}

export default Header;