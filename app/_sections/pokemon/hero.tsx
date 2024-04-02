"use client";
import { Box, TextField } from "@radix-ui/themes";
import { FC } from "react";
import Image from "next/image";

interface PokemonHeroProps {
  image: string;
  name: string;
}

export const PokemonHero: FC<PokemonHeroProps> = (props) => {
  const { image, name } = props;
  return (
    <div className="bg-slate-700 bg-opacity-60 w-screen h-[40vh] grid place-items-center">
      <Image src={image} alt={name} width={300} height={400} unoptimized />
    </div>
  );
};
