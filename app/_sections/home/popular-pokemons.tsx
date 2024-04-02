"use client";

import { useState } from "react";
import { useResolvedData } from "../../_utils/hooks";
import { Flex, Heading, Skeleton } from "@radix-ui/themes";
import dynamic from "next/dynamic";
import { Carousel } from "../../_components/carousel";
import {
  CarouselNext,
  CarouselPrevious,
} from "../../_components/carousel/buttons";
import { CarouselSlideList } from "../../_components/carousel/slide-list";
import { CarouselSlide } from "../../_components/carousel/slide";
import { CardsListSkeleton } from "../../_components/cards-list-skeleton";

const cardWidth = 300;

const PokemonCard = dynamic(
  () =>
    import("../../_components/pokemon-card").then(
      (module) => module.PokemonCard
    ),
  {
    loading: () => (
      <Skeleton width="300px" height="400px">
        Loading
      </Skeleton>
    ),
  }
);

export const PopularPokemons = () => {
  const [activeItem, setActiveItem] = useState(0);
  const { loading, error, pokemons } = useResolvedData();

  if (loading) {
    return <CardsListSkeleton />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const handleNext = () => {
    if (activeItem === pokemons.length - 1) {
      setActiveItem(0);
    } else {
      setActiveItem((prev) => prev + 1);
    }
  };
  const handlePrev = () => {
    if (activeItem === 0) {
      setActiveItem(pokemons.length - 1);
    } else {
      setActiveItem((prev) => prev - 1);
    }
  };
  return (
    <div className="px-6 flex flex-col gap-y-4">
      <Heading as="h2">Popular Pokemons</Heading>
      <Carousel>
        <div className="relative flex items-center justify-center gap-x-3">
          <CarouselPrevious onClick={handlePrev} />
          <CarouselSlideList itemWidth={cardWidth}>
            {pokemons.map((pokemon, index) => (
              <CarouselSlide key={index}>
                <PokemonCard
                id={pokemon.id}
                  image={pokemon.sprites?.front_default}
                  name={pokemon.name}
                  base_experience={pokemon.base_experience}
                  aria-current={activeItem === index}
                />
              </CarouselSlide>
            ))}
          </CarouselSlideList>
          <CarouselNext onClick={handleNext} />
        </div>
      </Carousel>
    </div>
  );
};
