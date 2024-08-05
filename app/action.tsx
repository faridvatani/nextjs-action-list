"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

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

    return data.map((anime: AnimeProp, index: number) => (
      <AnimeCard key={anime.id} anime={anime} index={index} />
    ));
  } catch (error: any) {
    throw new Error(`Error fetching anime: ${error.message}`);
  }
}
