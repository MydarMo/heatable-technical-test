import { CarouselSlideListProps } from "@/app/_types/carousel";
import { Children, FC, useEffect, useState } from "react";
import { useCarousel } from "../carousel";
import classNames from "classnames";

export const CarouselSlideList: FC<CarouselSlideListProps> = ({
    itemWidth,
    children,
    className,
  }) => {
    const [maxCards, setMaxCards] = useState(1);

    const { slideListRef, setTotalSlides, setSlideWidth, currentSlide } =
      useCarousel();
    const totalSlides = Children.count(children);
  
    useEffect(() => {
      setTotalSlides(totalSlides);
      if (slideListRef.current) {
        if (slideListRef.current.offsetWidth < (currentSlide + 1) * itemWidth) {
          setSlideWidth(itemWidth);
        }
      }
    }, [totalSlides, setTotalSlides, setSlideWidth, slideListRef, currentSlide]);
  
    useEffect(() => {
      const maxNumberCards = Math.floor((0.95 * window.innerWidth) / itemWidth);
      setMaxCards(maxNumberCards);
    }, []);
  
    return (
      <div
        ref={slideListRef}
        className={classNames(
          "flex overflow-hidden snap-mandatory snap-x pointer-events-none gap-x-1",
          className
        )}
        style={{
          maxWidth: maxCards * itemWidth,
        }}
      >
        {children}
      </div>
    );
  };