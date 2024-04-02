// eslint-disable-next-line no-unused-vars
import { ApiData, Pokemon } from "../_types/pokemon";
import { request } from "./helpers";

export const getPokemonData: (queries?: string) => Promise<Pokemon[]> = async (
  queries?: string
) => {
  // fetch the list of pokemons
  const data = await request(`https://pokeapi.co/api/v2/pokemon${queries}`);

  // map through the list of pokemons to access the url to return complete pokemon json
  const pokemons = await Promise.allSettled(
    data.results.map(async (res: Record<string, any>) => await request(res.url))
  );

  const fulfilledPokemons = pokemons
    .filter((resolve) => resolve.status !== "rejected")
    .map((pokemon: Record<string, any>) => pokemon.value);

  return fulfilledPokemons;
};

export const getPokemons: (queries?: string) => Promise<ApiData[]> = async (
  queries?: string
) => {
  // fetch the list of pokemons
  const pokemons = await request(`https://pokeapi.co/api/v2/pokemon${queries}`);

  return pokemons.results;
};

export const getPokemonsByUrls: (urls: string[]) => Promise<Pokemon[]> = async (
  urls: string[]
) => {
  const pokemons = await Promise.allSettled(
    urls.map(async (url: string) => await request(url))
  );

  const fulfilledPokemons = pokemons
    .filter((resolve) => resolve.status !== "rejected")
    .map((pokemon: Record<string, any>) => pokemon.value);

  return fulfilledPokemons;
};

export const getPokemonById: (id: string) => Promise<Pokemon> = async (
  id: string
) => {
  const data = await request(`https://pokeapi.co/api/v2/pokemon/${id}`);

  return data;
};