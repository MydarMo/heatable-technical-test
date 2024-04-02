"use client";
import { PopularPokemons } from "@/app/_sections/home/popular-pokemons";
import { Hero } from "@/app/_sections/home/hero";
import { SearchResults } from "@/app/_sections/home/search-results";
import { useData, useDataById } from "@/app/_utils/hooks";
import { useState } from "react";
import { getPokemonsByUrls } from "@/app/_api";
import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import { Toast } from "../../_components/toast";
import { usePathname, useSearchParams } from "next/navigation";
import { PokemonHero } from "@/app/_sections/pokemon/hero";
import { PokemonDetails } from "@/app/_sections/pokemon/details";

export default function Home() {
  const searchParams = useSearchParams();

  const pokemonId = searchParams.get("id");
  const { loading, error, pokemon } = useDataById(pokemonId as string);

  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!pokemon) {
    return;
  }

  return (
    <>
      <PokemonHero image={pokemon.sprites?.front_default} name={pokemon.name} />
      <PokemonDetails {...pokemon} />
    </>
  );
}
