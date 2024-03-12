'use client'

import { useEffect, useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import { IpResult } from "@/app/types/IpResult";
import { toast } from "react-toastify";

type IpSearchProps = {
  ipDataResult: IpResult
}

export const IpSearch = ({ipDataResult}: IpSearchProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    if (ipDataResult.error) {
      toast.error(ipDataResult.error.message);
    }
  }, [ipDataResult.error]);

  const handleSubmit = (event: FormData) => {
    startTransition(() => {
      router.push(`${pathname}?ip=${event.get('ip')}`);
      router.refresh()
    })
  }

  //TODO Checkout about aria acessible things to we know all about that aria stuff
  return (
    <form className="flex w-11/12 h-12 md:max-w-xl md:h-14" action={handleSubmit}>
      <input name='ip' className="w-full rounded-l-xl text-lg p-4 focus:outline-none hover:cursor-pointer"
             aria-label={'ip search name'} placeholder="Search for any IP adress..."
             defaultValue={ipDataResult.data?.ip}/>
      <button type='submit' className="w-16 h-full flex justify-center items-center bg-black rounded-r-2xl"
              aria-label={'ip search button'} aria-disabled={isPending}>
        {isPending ? (
          <div className="inline-block w-4 h-4 border-2 border-t-white border-black rounded-full animate-spin"></div>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor"
               className="w-4 h-4 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
          </svg>
        )}
      </button>
    </form>
  )
}