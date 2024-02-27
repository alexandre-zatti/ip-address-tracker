'use client'

import { getIpDataAction } from "@/app/actions/getIpDataAction";
import { useFormState } from 'react-dom'
import { useContext, useEffect, useTransition } from "react";
import { IpDataContext } from "@/app/components/IpDataProvider";

export const IpSearch = () => {
  const {setIpData} = useContext(IpDataContext)
  const [isPending, startTransition] = useTransition();
  const [state, formAction] = useFormState(getIpDataAction, {
    data: null,
    error: null
  })

  useEffect(() => {
    // On page load set blank ip do acess the current user Ip Adress
    const formData = new FormData()
    formData.set('ip', '')

    startTransition(() => {
      formAction(formData);
    });
  }, [formAction])

  useEffect(() => {
    if (state.data) {
      setIpData(state.data)
    }

  }, [state, setIpData]);

  const handleSubmit = (event: FormData) => {
    startTransition(() => {
      formAction(event);
    });
  }

  //TODO Checkout about aria acessible things to we know all about that aria stuff
  return (

    <div className="bg-mobile md:bg-desktop bg-cover flex flex-col gap-6 items-center p-6">
      <h1 className="text-2xl text-white md:text-3xl">IP Adress Tracker</h1>
      <form className="flex w-full max-w-[500px]" action={handleSubmit}>
        <input name='ip' className="h-12 w-full rounded-l-xl text-lg p-4 focus:outline-none hover:cursor-pointer"
               aria-label={'ip search name'} placeholder="Search for any IP adress"/>
        <button type='submit' className="w-16 h-12 flex justify-center items-center bg-black rounded-r-2xl"
                aria-disabled={isPending} aria-label={'ip search button'}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3}
               stroke="currentColor"
               className="w-4 h-4 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
          </svg>
        </button>
      </form>
    </div>

  )
}