'use client'

import { useContext } from "react";
import { IpDataContext } from "@/app/components/IpDataProvider";
import { IpInfo } from "@/app/components/IpInfo";


export const IpInfoContainer = () => {
  const {ipData} = useContext(IpDataContext)

  return (
    <div
      className="absolute bottom-[-250px] left-1/2 translate-x-[-50%] w-10/12 max-w-6xl h-96 bg-white p-5 rounded-2xl shadow-md md:bottom-[-100px] md:h-52 flex flex-col gap-8 md:flex-row md:justify-center md:items-center">
      <IpInfo title={'IP ADDRESS'} value={ipData.ip}/>
      <IpInfo title={'LOCATION'}
              value={`${ipData.location.city}, ${ipData.location.region} - ${ipData.location.country}`}/>
      <IpInfo title={'TIMEZONE'} value={`UTC ${ipData.location.timezone}`}/>
      <IpInfo title={'ISP'} value={`${ipData.isp}`}/>
    </div>
  )
}