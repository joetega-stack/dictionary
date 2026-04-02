'use client'
import React, { createContext } from "react";
import { useState, useEffect  } from "react";



export const AppContext = createContext({})

const Provider = ({ children }) => {
    const [data, setData] = useState([])
    const [query, setQuery] = useState("")
    const [on, setOn] = useState(false);
    const [font, setFont] = useState("serif")


    useEffect(() => {
        document.body.className = font;
    }, [font])

    const toggleTheme = () => {
        setOn(!on)
    }

    
    

    useEffect(() => {
        if (!query) return

        async function Get() {
            const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`)
            const result = await res.json()

            console.log("data is :",result)
            setData(result)
            
        }

        Get()
    }, [query])




  return (
      <AppContext.Provider value={{ setData, setQuery, query, data, on, toggleTheme, setFont, font}}
      >
          {children}
    </AppContext.Provider>
  )
}

export default Provider