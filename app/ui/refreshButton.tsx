'use client'
import { use } from 'react'
import { usePlanetsContextRefresh } from '../planets-context-provider';
 
export default function RefreshButton() {
  const refreshPlanets = usePlanetsContextRefresh();
 
  return (
    <button onClick={() => refreshPlanets()}>Refresh Planets</button>
  )
}