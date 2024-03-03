'use server'

import { IpData } from "@/app/types/IpData";

export const getIpDataAction = async (_prevState: any, formData: FormData) => {
  //TODO Use zod here to validate formData
  //TODO Check about error handling and how can we return and show on the input field or toast
  //TODO Check about loading spinner while fetching data
  //TODO Check about if i would use tanstack-query on the fetch call to get the external api ip location

  try {
    const response = await fetch(
      `https://api.ipdata.co/${formData.get('ip')}?api-key=${process.env.IP_API_KEY}`
    )
    return {
      data: await response.json() as IpData,
      error: null
    }
  } catch (e: any) {
    console.log(e)
    return {
      data: null,
      error: e
    }
  }
}