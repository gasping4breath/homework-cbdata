'use client'
import { refreshPlanets, usePlanetsDispatch } from '@/app/planets-context-provider';

 
export default function RefreshButton() {
  const dispatch = usePlanetsDispatch();
 
  return (
    <button onClick={() => refreshPlanets(dispatch)}>Refresh Planets</button>
  )
}