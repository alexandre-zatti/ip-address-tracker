import { IpSearch } from "@/app/components/IpSearch";
import { IpInfo } from "@/app/components/IpInfo";
import { IpDataProvider } from "@/app/components/IpDataProvider";

export default async function Home() {
  return (
    <main className="min-h-screen grid grid-rows-[1fr_2fr] grid-cols-1">
      <IpDataProvider>
        <IpSearch/>
        <div className="bg-white"></div>
        <IpInfo/>
      </IpDataProvider>
    </main>
  );
}
