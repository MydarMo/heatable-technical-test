"use client";

import { FC, useState } from "react";
import { Flex, Heading } from "@radix-ui/themes";
import { PokemonCard } from "../../_components/pokemon-card";

interface SearchResultsProps {
  results: Record<string, any>[];
}

export const SearchResults: FC<SearchResultsProps> = (props) => {
  const { results } = props;

  return (
    <div className="px-6 flex flex-col gap-y-4">
      <Heading as="h2">Search Results</Heading>
      <Flex gap="3" wrap="wrap">
        {results.map((result, index) => (
          <PokemonCard
            id={result.id}
            key={index}
            image={result.sprites.front_default}
            name={result.name}
            base_experience={result.base_experience}
          />
        ))}
      </Flex>
    </div>
  );
};
