
import { PlanetSchema, type PlanetDao } from '@/app/lib/definitions';

export async function getPlanets() {
    try {
        const response = await fetch('https://swapi.info/api/planets');
        const planetsDao = await response.json();
        const planets = planetsDao.map((result: PlanetDao) => PlanetSchema.parse(result));
        return planets;

    } catch (error) {
        console.error('API Error:', error);
        return [];
    }
}
