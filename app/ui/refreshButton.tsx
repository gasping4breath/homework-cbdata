'use client'
import { refreshPlanets, usePlanetsDispatch } from '@/app/planets-context-provider';
import { useRouter } from 'next/dist/client/components/navigation';
import { use } from 'react';


export default function RefreshButton() {
  const dispatch = usePlanetsDispatch();
  const { replace } = useRouter();

  return (
    <button
      className="flex mt-2 h-10 w-40 items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
      onClick={() => {
        refreshPlanets(dispatch)
        replace('/planets');
      }
      }>Refresh Planets</button>
  )
}