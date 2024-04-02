import { CarouselSlideProps } from "@/app/_types/carousel";
import classNames from "classnames";
import { FC } from "react";

export const CarouselSlide: FC<CarouselSlideProps> = ({
    children,
    className
  }) => {
    return (
      <div className={classNames("flex-none snap-center", className)}>
        {children}
      </div>
    );
  };