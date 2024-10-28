import React from "react";

function Aboutme() {
  return (

    <div className="container mx-auto p-4  w-[92%] bg-gray-900  mt-16">
        
        <p className="bg-slate-500 w-32 rounded-2xl p-1 text-center font-bold mx-auto mt-10 text-xs">
              About Me
            </p>
        
        <div className="container mx-auto p-4 flex items-start justify-between gap-12 mt-7">
            <div>
              <img class= " max-w-xs rounded-2xl" src="Assets/aboutme.png" alt="" />
            </div>
            <div>
                <div className="">
                    <p className="text-lg font-bold mb-7">Curious about me? Here you have it:</p>
                    <p className="text-xs mb-5">I an A software engineering in Kirirom institute of technology. I am passionate about solving people problem byt using technology such web tech and mobile tech which I experience both on solving problem as an intern project and client project since 2022.</p>
                    <p className="text-xs mb-5">I began my journey as a software engineer since 2022 where I am a student in university in Kirirom. I am really passionate about solving people problem and as up now I been working on many project helping my school community and social issue such as Rating my dorm and Tortbal which is the biggest project so far. </p>
                    <p className="text-xs mb-5">As A software engineer I were very really enjoy my time here do project because been doing this a few year I can get a lot of experience knowing a lot of people and alway learning new thing.</p>
                    <p className="text-xs mb-5">I also having community developer on TiKTok as well where you can find me there that I alway sharing my working experience and technique to my follower.</p>
                    <p className="text-xs mb-5">Quote For me that alway keeping with myself  </p>
                    <p className="text-xs mb-5">“Life is short , Do what you feel passion about” 😉</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Aboutme;