import Planets from '@/app/ui/planets';
import { Suspense } from 'react';
import RefreshButton from '@/app/ui/refreshButton';

export default function Page() {

  return (
    <div>
      <RefreshButton />
      <Suspense fallback={<div>Loading...</div>}>
        <Planets />
      </Suspense>
    </div>
  )
}