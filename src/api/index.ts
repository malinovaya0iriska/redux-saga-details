export const BASE_URL = 'https://swapi.dev/api/';

export async function getData(endpoint: string) {
  const request = await fetch(`${BASE_URL}${endpoint}`);
  const data = await request.json();
  return data;
}
