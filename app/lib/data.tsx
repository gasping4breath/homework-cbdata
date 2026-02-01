export async function getPlanets() {
    const response = await fetch('https://swapi.info/api/planets');
    const planets = await response.json();
    return planets;
}