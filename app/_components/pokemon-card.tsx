import { type FC } from "react";
import { Badge, Card, Flex, Heading } from "@radix-ui/themes";
import { DataList } from "@radix-ui/themes";
import classNames from "classnames";
import { PokemonCardProps } from "../_types/pokemon";
import { useRouter } from "next/navigation";

export const PokemonCard: FC<PokemonCardProps> = (props) => {
  const router = useRouter();
  const { id, image, name, base_experience, ...other } = props;

  const handleClick = () => {
    router.push(`/pokemon?id=${id}`);
    console.log('clicked')
  };

  return (
    <Card
      {...other}
      className="w-[300px] h-[400px] pointer-events"
      style={{ padding: "0" }}
      onClick={() => handleClick()}

    >
      <div className="bg-slate-500 h-3/4 w-full relative">
        <img
          src={image}
          alt="Bold typography"
          className={classNames("w-full h-full object-cover")}
        />
        {!other["aria-current"] && (
          <div className="bg-slate-700 opacity-50 h-full w-full absolute top-0 left-0 flex flex-col items-center justify-center z-index-1">
            <h1 className="text-6xl text-white text-center">
              {base_experience}
            </h1>
          </div>
        )}
      </div>

      <div className="w-full py-2 px-4 bg-slate-800 flex flex-col items-center justify-center h-1/4">
        {other["aria-current"] ? (
          <div className="flex flex-col gap-y-4 w-full ">
            <Flex gap="3" justify="between">
              <Heading as="h2">{name.toUpperCase()}</Heading>
              <Heading as="h2">{base_experience}</Heading>
            </Flex>
          </div>
        ) : (
          <Heading as="h2">{name.toUpperCase()}</Heading>
        )}
      </div>
    </Card>
  );
};
