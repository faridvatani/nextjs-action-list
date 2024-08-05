"use server";

const MAX_LIMIT = 8;
const BASE_URL = "https://shikimori.one/api/animes";

export async function fetchAnime(page: number) {
  try {
    const response = await fetch(
      `${BASE_URL}?page=${page}&limit=${MAX_LIMIT}&order=popularity`,
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch anime: ${response.statusText}`);
    }

    const data = await response.json();

    return data;
  } catch (error: any) {
    throw new Error(`Error fetching anime: ${error.message}`);
  }
}
