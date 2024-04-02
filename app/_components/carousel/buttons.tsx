import { CarouselButtonProps } from "@/app/_types/carousel";
import { FC } from "react";
import { useCarousel } from "../carousel";
import { IconButton } from "@radix-ui/themes";
import classNames from "classnames";

export const CarouselPrevious: FC<CarouselButtonProps> = ({
    className,
    onClick,
  }) => {
    const { setCurrentSlide, totalSlides } = useCarousel();
  
    const handlePrevious = () => {
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
      onClick && onClick();
    };
  
    return (
      <IconButton
        onClick={() => handlePrevious()}
        className={classNames("absolute left-0 h-full rounded-none", className)}
        highContrast
      >
        {"<"}
      </IconButton>
    );
  };
  
  export const CarouselNext: React.FC<CarouselButtonProps> = ({
    className,
    onClick,
  }) => {
    const { setCurrentSlide, totalSlides } = useCarousel();
  
    const handleNext = () => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
      onClick && onClick();
    };
  
    return (
      <IconButton
        onClick={() => handleNext()}
        className={classNames("absolute right-0 h-full rounded-none", className)}
        highContrast
      >
        {">"}
      </IconButton>
    );
  };