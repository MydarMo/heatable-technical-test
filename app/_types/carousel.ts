import { Dispatch, ReactNode, RefObject, SetStateAction } from "react";

export interface CarouselContextProps {
  currentSlide: number;
  totalSlides: number;
  setTotalSlides: Dispatch<SetStateAction<number>>;
  setCurrentSlide: Dispatch<SetStateAction<number>>;
  slideListRef: RefObject<HTMLDivElement>;
  setSlideWidth: Dispatch<SetStateAction<number>>;
}

export interface CarouselSlideProps {
  children?: ReactNode;
  className?: string;
}

export interface CarouselSlideListProps {
  itemWidth: number;
  children?: ReactNode;
  className?: string;
}

export interface CarouselButtonProps {
  onClick?: () => void;
  children?: ReactNode;
  className?: string;
}
