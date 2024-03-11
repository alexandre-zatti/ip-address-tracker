import { IpSearch } from "@/app/components/IpSearch";
import { IpInfoContainer } from "@/app/components/IpInfoContainer";
import dynamic from "next/dynamic";
import Loading from "@/app/components/Loading";
import { headers } from "next/headers";
import { IpData, IpError, IpResult } from "@/app/types/IpResult";

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

const getIpData = async (ip: string): Promise<IpResult> => {
  //TODO Use zod here to validate formData
  //TODO Check about error handling and how can we return and show on the input field or toast
  //TODO Check about loading spinner while fetching data
  //TODO Check about if i would use tanstack-query on the fetch call to get the external api ip location

  try {
    const response = await fetch(`https://api.ipdata.co/${ip}?api-key=${process.env.IP_API_KEY}`);
    const json = await response.json();

    if (response.ok) {
      return {data: json as IpData};
    } else {
      return {error: json as IpError};
    }
  } catch (error) {
    return {error: {message: 'An unexpected error occurred'}};
  }
}

export default async function Home({searchParams}: Readonly<HomeProps>) {
  const FALLBACK_IP_ADDRESS = '8.8.8.8'
  const forwardedFor = headers().get('x-forwarded-for')
  const ipAddress = searchParams.ip && searchParams.ip !== '' ? searchParams.ip : (forwardedFor ?? FALLBACK_IP_ADDRESS)
  const result = await getIpData(ipAddress)

  return (
    <main className="min-h-screen grid grid-rows-[300px_auto] grid-cols-1">
      <div className="bg-mobile md:bg-desktop bg-cover flex flex-col gap-6 items-center p-6 relative">
        <h1 className="text-2xl text-white md:text-4xl">IP Adress Tracker</h1>
        <IpSearch ipDataResult={result}/>
        <IpInfoContainer ipDataResult={result}/>
      </div>
      <LeafletMap ipDataResult={result}/>
    </main>
  );
}
