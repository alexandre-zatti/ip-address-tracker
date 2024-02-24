'use server'

export type IPData = {
  ip: string;
  location: {
    country: string;
    region: string;
    city: string;
    lat: number;
    lng: number;
    postalCode: string;
    timezone: string;
    geonameId: number;
  };
  domains: string[];
  as: {
    asn: number;
    name: string;
    route: string;
    domain: string;
    type: string;
  };
  isp: string;
};


export const getIpDataAction = async (_prevState: any, formData: FormData) => {
  //Use zod here to validate formData
  //Check to see how can we type the formData to not use any
  //Check about if i would use tanstack-query on the fetch call to get the external api ip location

  try {
    const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.IP_API_KEY}&ipAddress=${formData.get('ip')}`)
    return {
      data: await response.json(),
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