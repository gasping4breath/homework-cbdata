import Planets from '@/app/ui/planets';
import { Suspense } from 'react';
import RefreshButton from '@/app/ui/refreshButton';

export default function Page() {

  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Planets</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Planets />
        <RefreshButton />
      </Suspense>
    </div>
  )
}