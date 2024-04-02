"use client";
import { PopularPokemons } from "@/app/_sections/home/popular-pokemons";
import { Hero } from "@/app/_sections/home/hero";
import { SearchResults } from "@/app/_sections/home/search-results";
import { useData } from "@/app/_utils/hooks";
import { useState } from "react";
import { getPokemonsByUrls } from "@/app/_api";
import { Text } from "@radix-ui/themes";
import { Toast } from "../_components/toast";

export default function Home() {
  const { pokemons } = useData("?limit=1500");
  const [searchList, setSearchList] = useState<Record<string, any>[]>([]);
  const [showAlert, setShowAlert] = useState(false);

  const searchPokemon = async (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;

    if (newValue.trim().length === 0) {
      setSearchList([]);
      return;
    }

    const matchedPokemon = pokemons.filter((p) =>
      p.name.toLowerCase().includes(newValue)
    );

    if (matchedPokemon.length > 0) {
      const pokemons = await getPokemonsByUrls(
        matchedPokemon.map((pokemon) => pokemon.url)
      );
      setSearchList(pokemons);
      setShowAlert(false);
    } else {
      setSearchList([]);
      setShowAlert(true);
    }
  };

  return (
    <>
      <Hero onSearch={searchPokemon} />
      {searchList.length > 0 ? <SearchResults results={searchList} /> : <></>}
      <PopularPokemons />
      <Toast
        open={showAlert}
        setOpen={setShowAlert}
        title="No search results found"
      />
    </>
  );
}
