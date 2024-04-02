"use client";
import { useState, useEffect } from "react";
import { getPokemonById, getPokemonData, getPokemons, getPokemonsByUrls } from "../_api";
import { ApiData, Pokemon } from "../_types/pokemon";

export const useResolvedData = (query?: string) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    getPokemonData(query ?? "?limit=20")
      .then((response) => setPokemons(response))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return {
    loading,
    error,
    pokemons,
  };
};

export const useData = (query?: string) => {
  const [pokemons, setPokemons] = useState<ApiData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    getPokemons(query ?? "?limit=20")
      .then((response) => setPokemons(response))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return {
    loading,
    error,
    pokemons,
  };
};

export const useDataById = (id: string) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    getPokemonById(id)
      .then((response) => setPokemon(response))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return {
    loading,
    error,
    pokemon,
  };
};