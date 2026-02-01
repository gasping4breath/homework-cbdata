'use client'
import { createContext, useContext } from 'react'
import { Planet } from '@/app/lib/definitions';
 
interface PlanetsContextType {
  planetsPromise: Promise<Planet[]>;
  refreshPlanets: () => void;
}
export const PlanetsContext = createContext<PlanetsContextType | null>(null);
 
export default function PlanetsProvider({
  children,
  planetsPromise,
  refreshPlanets,
}: {
  children: React.ReactNode,
  planetsPromise: Promise<Planet[]>,
  refreshPlanets: () => void,
}) {
  return <PlanetsContext.Provider value={{ planetsPromise, refreshPlanets }}>{children}</PlanetsContext.Provider>
}

export function usePlanetsContext() {
  const context = useContext(PlanetsContext);
  console.log("======context", context);
  if (!context) {
    throw new Error('useContext must be used within a usePlanetsContext')
  } else {
    return context.planetsPromise;
  }
}

export function usePlanetsContextRefresh() {
  const context = useContext(PlanetsContext);
  console.log("======refresh", context);
  if (!context) {
    throw new Error('useContext must be used within a usePlanetsContext')
  } else {
    return context.refreshPlanets;
  }
}