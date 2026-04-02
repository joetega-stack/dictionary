"use client";
import React, { useContext } from "react";
import { AppContext } from "@/contexts/fetchData";
import Link from "next/link";

const Footer = () => {
  const { data, on } = useContext(AppContext);

  return (
    <div className={`h-20 lg:w-full w-100 px-5 flex items-center ${on? "text-gray-200" : "text-gray-800"}`}>
          <div>
               <p>Source</p>
      <Link href={`${data.sourceUrls}`}>{data?.[0]?.sourceUrls}</Link>
     </div>
    </div>
  );
};

export default Footer;
