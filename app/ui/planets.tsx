'use client'
import { use } from 'react'
import { usePlanetsContext } from '../planets-context-provider';
 
export default function Planets() {
  const planetPromise = usePlanetsContext();
  const planets = use(planetPromise);
  console.log("======planets", planets.length);
 
  return (
    <ul>
      {planets.map((planet) => (
        <li key={planet.url}>{planet.name}</li>
      ))}
    </ul>
  )
}