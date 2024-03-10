'use client'

import { IpInfo } from "@/app/components/IpInfo";
import { VerticalSeparator } from "@/app/components/VerticalSeparator"
import { IpResult } from "@/app/types/IpResult";

type IpInfoContainerProps = {
  ipDataResult: IpResult
}
export const IpInfoContainer = ({ipDataResult}: IpInfoContainerProps) => {

  return (
    <div
      className="absolute bottom-[-150px] md:bottom-[-250px] left-1/2 translate-x-[-50%] w-10/12 max-w-sm lg:max-w-6xl h-72 md:h-96 bg-white p-5 rounded-2xl shadow-md lg:bottom-[-100px] lg:h-52 flex flex-col gap-2 md:gap-8 lg:flex-row lg:justify-center lg:items-center z-50">
      <IpInfo title={'IP ADDRESS'} value={`${ipDataResult.data?.ip}`}/>
      <VerticalSeparator/>
      <IpInfo title={'LOCATION'} value={`${ipDataResult.data?.city}, ${ipDataResult.data?.region}`}/>
      <VerticalSeparator/>
      <IpInfo title={'COUNTRY'} value={`${ipDataResult.data?.country_name}`}/>
      <VerticalSeparator/>
      <IpInfo title={'ISP'} value={`${ipDataResult.data?.asn.name}`}/>
    </div>
  )

}