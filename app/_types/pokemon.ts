type DivProps = JSX.IntrinsicElements["div"];

export interface ApiData {
  name: string;
  url: string;
}

export interface StatsProps {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface Pokemon {
  id: string;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  abilities: Record<string, any>[];
  sprites?: Record<string, any>;
  types: Record<string, any>[];
  stats: StatsProps[];
}

export interface PokemonCardProps extends DivProps {
  id: string;
  image: string;
  name: string;
  base_experience: number;
}
