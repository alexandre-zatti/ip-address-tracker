'use client'

import { useContext } from "react";
import { IpDataContext } from "@/app/components/IpDataProvider";
import { IpInfo } from "@/app/components/IpInfo";
import { VerticalSeparator } from "@/app/components/VerticalSeparator"
import Skeleton from "react-loading-skeleton";


export const IpInfoContainer = () => {
  const {ipData, isPending} = useContext(IpDataContext)

  return (
    <div
      className="absolute bottom-[-150px] md:bottom-[-250px] left-1/2 translate-x-[-50%] w-10/12 max-w-sm lg:max-w-6xl h-72 md:h-96 bg-white p-5 rounded-2xl shadow-md lg:bottom-[-100px] lg:h-52 flex flex-col gap-2 md:gap-8 lg:flex-row lg:justify-center lg:items-center z-50">
      {!isPending ? (
        <>
          <IpInfo title={'IP ADDRESS'} value={ipData.ip}/>
          <VerticalSeparator/>
          <IpInfo title={'LOCATION'} value={`${ipData.city}, ${ipData.region}`}/>
          <VerticalSeparator/>
          <IpInfo title={'COUNTRY'} value={`${ipData.country_name}`}/>
          <VerticalSeparator/>
          <IpInfo title={'ISP'} value={ipData.asn.name}/>
        </>
      ) : (
        <>
          <Skeleton count={1} height={30} width={200}/>
          <VerticalSeparator/>
          <Skeleton count={1} height={30} width={200}/>
          <VerticalSeparator/>
          <Skeleton count={1} height={30} width={200}/>
          <VerticalSeparator/>
          <Skeleton count={1} height={30} width={200}/>
        </>
      )}
    </div>
  );
}