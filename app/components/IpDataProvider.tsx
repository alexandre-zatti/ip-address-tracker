'use client'

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { IpData } from "@/app/types/IpData";

export const IpDataContext = createContext<{
  ipData: IpData,
  isPending: boolean,
  setIpData: Dispatch<SetStateAction<IpData>>
  setIsPending: Dispatch<SetStateAction<boolean>>
}>({} as {
  ipData: IpData
  isPending: boolean
  setIpData: Dispatch<SetStateAction<IpData>>
  setIsPending: Dispatch<SetStateAction<boolean>>
})

export const IpDataProvider = ({children}: { children: ReactNode }) => {
  const [ipData, setIpData] = useState<IpData>({} as IpData)
  const [isPending, setIsPending] = useState<boolean>(true)

  const contextValue = {
    ipData,
    isPending,
    setIpData,
    setIsPending
  }

  return (
    <IpDataContext.Provider value={contextValue}>
      {children}
    </IpDataContext.Provider>
  )
}