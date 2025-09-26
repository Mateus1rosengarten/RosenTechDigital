import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback } from "react";
import { CarouselSlides } from "../../data/data";

const ResultCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    AutoScroll({
      playOnInit: false,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      speed: 0,
    }),
  ]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="">
      <div className="relative rounded-2xl">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex max-h-[800px]">
            {CarouselSlides.map((slide, index) => (
              <div key={index} className="min-w-[100%] px-2">
                <div className="bg-background rounded-2xl shadow-md p-2 flex flex-col h-full">
                  <img
                    src={slide.image}
                    alt={`Gráfico`}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-y-0 left-0 flex items-center pl-4">
          <button
            onClick={scrollPrev}
            className="text-foreground p-4 shadow-lg transition duration-default ease-in-out flex items-center justify-center"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={60} />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-4">
          <button
            onClick={scrollNext}
            className="text-foreground p-4 shadow-lg transition duration-default ease-in-out flex items-center justify-center"
            aria-label="Next Slide"
          >
            <ChevronRight size={60} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCarousel;
