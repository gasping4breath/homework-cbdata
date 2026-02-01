export async function getPlanets() {
    try {
        const response = await fetch('https://swapi.info/api/planets');
        const planets = await response.json();
        return planets;

    } catch (error) {
        console.error('API Error:', error);
        return [];
    }
}
