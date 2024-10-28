import React from "react";

function Header() {
    return (
        <header className="bg-black text-white">
            <div className="container mx-auto p-4 flex items-center justify-between w-[92%]">
                <div>
                        <h1 className="text-2xl font-bold">
                            Sothea Dev.
                        </h1>
                </div>
                <nav className=" ">
                        <ul className="flex items-center gap-7 ">
                            <li>
                                <a href="/Assets/Portfolio/BanSothea__CV.pdf" dowload='BanSothea__CV.pdf' className="bg-white rounded-lg text-black p-2">Download CV</a>
                            </li>
                        </ul>
                </nav>
             </div> 

        </header>
    )
}

export default Header;