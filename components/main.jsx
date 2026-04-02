'use client'
import React from 'react'
import { GoSearch } from "react-icons/go";
import { FaCirclePlay } from "react-icons/fa6";
import { useContext } from 'react';
import { AppContext } from '@/contexts/fetchData';



const Main = () => {
    const { setData, data, query, setQuery, on } = useContext(AppContext)
    
    
    const speak = (query) => {
    const voice = new SpeechSynthesisUtterance(query)
    window.speechSynthesis.speak(voice)
  }
  return (
    <div className="flex flex-1 flex-col gap-7 h-dvh w-100 px-5 lg:w-full">
          <div className={`flex lg:w-full lg:h-15 justify-center items-center lg:p-8 p-3 rounded-2xl ${on? "bg-gray-200" : "bg-gray-400"}`}>
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
  )
}

export default Main