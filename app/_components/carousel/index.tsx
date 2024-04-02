"use client";
import classNames from "classnames";
import { CarouselContextProps } from "@/app/_types/carousel";
import { FC, ReactNode, createContext, useContext, useEffect, useRef, useState } from "react";

const CarouselContext = createContext<CarouselContextProps | null>(null);

export const useCarousel = () => {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a Carousel");
  }
  return context;
};

interface CarouselProps {
  children?: ReactNode;
  className?: string;
}

export const Carousel: FC<CarouselProps> = ({ children, className }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const slideListRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (slideListRef.current) {
      slideListRef.current.scrollTo({
        left: currentSlide * slideWidth,
        behavior: "smooth",
      });
    }
  }, [currentSlide, slideWidth]);

  const handleClick = () => {
    if (sliderRef.current) {
      sliderRef.current.focus();
    }
  };

  return (
    <CarouselContext.Provider
      value={{
        currentSlide,
        setCurrentSlide,
        slideListRef,
        totalSlides,
        setTotalSlides,
        setSlideWidth,
      }}
    >
      <div onClick={handleClick} className={classNames(className)}>
        {children}
      </div>
    </CarouselContext.Provider>
  );
};
