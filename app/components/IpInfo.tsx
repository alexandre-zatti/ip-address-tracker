'use client'

import { useContext } from "react";
import { IpDataContext } from "@/app/components/IpDataProvider";


export const IpInfo = () => {
  const ipData = useContext(IpDataContext)

  return (
    <div
      className="absolute w-10/12 max-w-sm h-1/3 z-10 top-40 left-1/2 transform -translate-x-1/2 bg-white p-5 rounded-lg shadow-md md:w-2xl md:max-w-3xl md:h-1/5 md:top-1/4">
      {JSON.stringify(ipData)}
    </div>
  )
}