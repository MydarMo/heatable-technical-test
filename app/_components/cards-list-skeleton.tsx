import { Flex, Skeleton } from "@radix-ui/themes";
import { FC } from "react";

export const CardsListSkeleton: FC = () => {
return(
    <Flex gap="4" width="100vw">
        <Skeleton width="300px" height="400px">Loading</Skeleton>
    </Flex>
)
}