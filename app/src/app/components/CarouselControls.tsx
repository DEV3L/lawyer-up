"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export const CarouselControls = ({
  onPrevious,
  onNext,
}: {
  onPrevious: () => void;
  onNext: () => void;
}) => (
  <>
    <button
      className="absolute left-[-50px] z-10 p-2 rounded-full bg-white shadow-lg hover:scale-110 transition-transform"
      aria-label="Previous card"
      onClick={onPrevious}
    >
      <ChevronLeft className="w-8 h-8 text-black" />
    </button>
    <button
      className="absolute right-[-50px] z-10 p-2 rounded-full bg-white shadow-lg hover:scale-110 transition-transform"
      aria-label="Next card"
      onClick={onNext}
    >
      <ChevronRight className="w-8 h-8 text-black" />
    </button>
  </>
);
