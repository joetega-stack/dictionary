"use client";
import React from "react";
import { RiBook2Line } from "react-icons/ri";
import { FaChevronDown, FaMoon, FaSun, FaChevronUp } from "react-icons/fa";
import { useState } from "react";
import { AppContext } from "@/contexts/fetchData";
import { useContext } from "react";

const Header = () => {
    const { on, toggleTheme, setFont, font } = useContext(AppContext)
  const [active, setActive] = useState(false)
  
  return (
    <div
      className={`flex py-10 px-4 lg:w-full w-100 justify-between items-center ${on ? "bg-black" : "bg-white"}`}
    >
      <nav>
        <RiBook2Line
          className={`size-20 ${on ? "text-white" : "text-black"}`}
        />
      </nav>
      <div className="flex gap-3 items-center">
              <div
                  onClick={()=>{setActive(!active)}}
          className={` relative flex items-center gap-3 rounded-lg justify-center border border-gray-300 h-10 w-25 cursor-pointer text-purple-500`}
        >
                  <p className={`font-semibold ${on ? "text-white" : "text-black"}`}>{font}</p>
                  {active ? <FaChevronUp /> : <FaChevronDown />}
                  <div className={`flex flex-col items-center gap-2 *:cursor-pointer *:active:scale-98 divide-y *:w-21 divide-gray-300 bg-white p-2 w-25 border border-gray-300 rounded-lg absolute ${active ? "top-[110%]" : "hidden"}`}>
                      <button onClick={()=>{setFont("serif")}}>serif</button>
                      <button onClick={()=>{setFont("mono")}}>mono</button>
                      <button onClick={()=>{setFont("sans")}}>sans</button>
                  </div>
        </div>
        <div className="h-15 w-0.5 bg-gray-500"></div>
        <div className="w-20 h-10 flex items-center gap-2">
          <div
            onClick={() => toggleTheme()}
            className={` border h-6.5 w-12.5 cursor-pointer relative rounded-[20px] ${on ? "bg-green-500" : "bg-gray-500"}`}
          >
            <div
              className={`w-6 h-5.5 bg-white top-[5%] rounded-[50%] transition-[0.3s] absolute ${on ? "left-[50%]" : "left-[1%]"}`}
            ></div>
          </div>
          <div
            onClick={() => {
              toggleTheme();
            }}
            className={`${on ? "text-white" : "text-black"}`}
          >
            {on ? <FaMoon /> : <FaSun />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
