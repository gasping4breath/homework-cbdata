'use client'
import { createContext, Dispatch, useContext, useReducer } from 'react';
import { Planet } from '@/app/lib/definitions';
import { getPlanets } from '@/app/lib/data';

const PLANETS_REFRESH_ACTION = 'PLANETS_REFRESH_ACTION';

export type PlanetsAction =
  | { type: typeof PLANETS_REFRESH_ACTION; };

const PlanetsContext = createContext<Promise<Planet[]> | null>(null);
const PlanetsDispatchContext = createContext<Dispatch<PlanetsAction> | null>(null);

export function PlanetsProvider({ children }: { children: React.ReactNode }) {
  const [planetsPromise, dispatch] = useReducer(
    planetsReducer,
    getPlanets()
  );

  return (
    <PlanetsContext value={planetsPromise}>
      <PlanetsDispatchContext value={dispatch}>
        {children}
      </PlanetsDispatchContext>
    </PlanetsContext>
  );
}

export function usePlanetsContext() {
  const context = useContext(PlanetsContext);
  if (!context) {
    throw new Error('Missing usePlanetsContext')
  }
  return context;

}

export function usePlanetsDispatch() {
  const context = useContext(PlanetsDispatchContext);
  if (!context) {
    throw new Error('Missing PlanetsDispatchContext')
  }
  return context
}

function planetsReducer(_: any, action: PlanetsAction) {
  switch (action.type) {
    case PLANETS_REFRESH_ACTION: {
      return getPlanets();
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export function refreshPlanets(dispatch: Dispatch<PlanetsAction>) {
  dispatch({ type: PLANETS_REFRESH_ACTION });
}
