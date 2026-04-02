"use client";
import { AppContext } from "@/contexts/fetchData";
import { useContext } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Main from "@/components/main"

export default function Home() {
  const { on, font} = useContext(AppContext);


  return (
    <div className={`flex flex-col lg:p-20 lg:w-full justify-center items-center ${font =="serif"&& "font-monoton"} ${font =="mono"&& "font-dm"} ${on? "bg-black" : "bg-white"}`}>
        <Header />
        <Main/>
        <Footer />
    </div>
  );
}
