import { IpSearch } from "@/app/components/IpSearch";
import { IpInfoContainer } from "@/app/components/IpInfoContainer";
import dynamic from "next/dynamic";
import Loading from "@/app/components/Loading";
import { IpData } from "@/app/types/IpData";
import { headers } from "next/headers";


const LeafletMap = dynamic(
  () => import("@/app/components/IpMapLocation"),
  {
    loading: () => <Loading/>,
    ssr: false
  }
)

type SearchParams = {
  ip?: string;
}

type HomeProps = {
  searchParams: SearchParams;
};

const getIpData = async (ip: string) => {
  //TODO Use zod here to validate formData
  //TODO Check about error handling and how can we return and show on the input field or toast
  //TODO Check about loading spinner while fetching data
  //TODO Check about if i would use tanstack-query on the fetch call to get the external api ip location

  try {
    const response = await fetch(
      `https://api.ipdata.co/${ip}?api-key=${process.env.IP_API_KEY}`
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

export default async function Home({searchParams}: HomeProps) {
  const FALLBACK_IP_ADDRESS = '8.8.8.8'
  const forwardedFor = headers().get('x-forwarded-for')
  const ipData = await getIpData(searchParams.ip ?? (forwardedFor ?? FALLBACK_IP_ADDRESS))

  return (
    <main className="min-h-screen grid grid-rows-[300px_auto] grid-cols-1">
      <div className="bg-mobile md:bg-desktop bg-cover flex flex-col gap-6 items-center p-6 relative">
        <h1 className="text-2xl text-white md:text-4xl">IP Adress Tracker</h1>
        <IpSearch ipDataRequest={ipData}/>
        <IpInfoContainer ipDataRequest={ipData}/>
      </div>
      <LeafletMap ipDataRequest={ipData}/>
    </main>
  );
}
