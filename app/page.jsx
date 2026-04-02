"use client";
import { AppContext } from "@/contexts/fetchData";
import { useContext, useState } from "react";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { GoSearch } from "react-icons/go";
import { FaCirclePlay } from "react-icons/fa6";

export default function Home() {
  const { setData, data, query, setQuery, on, toggleTheme, font} = useContext(AppContext);
  const [search, setSearch] = useState("");

  const speak = (query) => {
    const voice = new SpeechSynthesisUtterance(query)
    window.speechSynthesis.speak(voice)
  }

  return (
    <div className={`flex lg:p-20 lg:w-full justify-center items-center ${font =="serif"&& "font-monoton"} ${font =="mono"&& "font-dm"} ${on? "bg-black" : "bg-white"}`}>
      <div className={`lg:border lg:w-200 flex flex-col items-center gap-5 p-10 ${on? "text-gray-500" : "text-gray-300"}`}>
        <Header />
        <div className="flex flex-col gap-7 flex-1 w-100 px-5 lg:w-full">
          <div className={`flex lg:w-170 lg:h-15 justify-center items-center lg:p-8 p-3 rounded-2xl ${on? "bg-gray-200" : "bg-gray-400"}`}>
            <input
              type="search"
              className={`flex-1 outline-none ${on? "text-gray-900" : "text-gray-200"}`}
              placeholder="Search for any word..."
              value={query}
              onInput={(e) => {
                setQuery(e.target.value)
              }}
            />
            <GoSearch className={`text-purple-600 size-7`} />
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col gap-3">
              <p className={`text-4xl font-bold ${on? "text-gray-200" : "text-gray-800"}`}>{query}</p>
              {/* <span className="text-purple-500 font-semibold">{data?.[0].phonetic}</span> */}
            </div>
            <FaCirclePlay className={`text-purple-900 hover:text-purple-800 size-18 cursor-pointer`}
            onClick={()=>{speak(query)}}/>
          </div>
          <div className="flex items-center gap-10">
            <p className={`text-2xl ${on? "text-gray-200" : "text-gray-800"}`}>{data?.[0]?.meanings?.[0]?.partOfSpeech}</p>
            <div className="h-0.5 w-full bg-gray-300"></div>
          </div>
          <div>
            {data?.[0]?.meanings?.[0].definitions.map((item, i) => {
              console.log()
              return (
                <ul className="list-disc marker:text-purple-500" key={i}>
                  <li className={`mb-5 ${on? "text-gray-200" : "text-gray-800"}`}>{item.definition}
                    <ul  className="mt-3 text-gray-400">
                      <li>{item.example}</li>
                    </ul>
                  </li>
                </ul>
              )
            })}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
