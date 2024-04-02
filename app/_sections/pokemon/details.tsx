import { type FC } from "react";
import { Badge, Box, Card, Flex, Heading } from "@radix-ui/themes";
import { DataList } from "@radix-ui/themes";
import { Pokemon } from "@/app/_types/pokemon";
import Image from "next/image";
import { StatsCard } from "@/app/_components/stats-card";

export const PokemonDetails: FC<Pokemon> = (props) => {
  const {
    name,
    base_experience,
    height,
    weight,
    abilities,
    types,
    sprites,
    stats,
  } = props;
  return (
    <div className="flex flex-col gap-y-6 px-10 min-w-[60vw]">
      <Flex justify="between" align="center" gap="4">
        <Heading as="h1">{name.toUpperCase()}</Heading>
        <Heading as="h2">{base_experience}</Heading>
      </Flex>
      <DataList.Root orientation={{initial: "vertical", xs: "horizontal"}}>
        <DataList.Item>
          <DataList.Item>
            <DataList.Label minWidth="88px">Height</DataList.Label>
            <DataList.Value>{height}</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label minWidth="88px">Weight</DataList.Label>
            <DataList.Value>{weight}</DataList.Value>
          </DataList.Item>
          <DataList.Label minWidth="88px">Types</DataList.Label>
          <DataList.Value>
            <Flex gap="2">
              {types.map((type, index) => (
                <Badge key={index} color="orange" size="1" radius="small">
                  {type.type.name}
                </Badge>
              ))}
            </Flex>
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="88px">Abilities</DataList.Label>
          <DataList.Value>
            {abilities.map((ability) => ability.ability.name).join(" / ")}
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="88px">Stats</DataList.Label>
          <DataList.Value>
            <StatsCard stats={stats} />
          </DataList.Value>
        </DataList.Item>
      </DataList.Root>
    </div>
  );
};
