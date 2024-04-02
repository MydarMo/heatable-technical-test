import { type FC } from "react";
import {
  Badge,
  Box,
  Card,
  Flex,
  Heading,
  Progress,
  Text,
} from "@radix-ui/themes";
import { DataList } from "@radix-ui/themes";
import classNames from "classnames";
import { PokemonCardProps, StatsProps } from "../_types/pokemon";

interface StatsCardProps {
  stats: StatsProps[];
}

export const StatsCard: FC<StatsCardProps> = (props) => {
  const { stats } = props;
  return (
    <Box width={{initial: "100%", sm: "500px"}}>
      <Card size="3">
        <div className="flex flex-col gap-y-4">
          {stats.map(({ stat, base_stat }, index) => (
            <Flex key={index} gap="4" align="center">
              <Text>{stat.name}</Text>
              <Progress value={base_stat} size="2" />
            </Flex>
          ))}
        </div>
      </Card>
    </Box>
  );
};
