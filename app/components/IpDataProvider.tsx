'use client'

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { IpData } from "@/app/types/IpData";

export const IpDataContext = createContext<{ ipData: IpData, setIpData: Dispatch<SetStateAction<IpData>> }>({} as {
  ipData: IpData;
  setIpData: Dispatch<SetStateAction<IpData>>
})

export const IpDataProvider = ({children}: { children: ReactNode }) => {
  const [ipData, setIpData] = useState<IpData>({} as IpData)

  const contextValue = {
    ipData,
    setIpData
  }

  return (
    <IpDataContext.Provider value={contextValue}>
      {children}
    </IpDataContext.Provider>
  )
}