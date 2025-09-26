import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoscroll from 'embla-carousel-auto-scroll';
import { techsCarouselItems } from '../../data/data';

const TechCarousel: React.FC = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
    },
    [
      Autoscroll({
        playOnInit: true,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
        speed: 0.5,
      }),
    ]
  );

  return (
    <div className="w-full overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {techsCarouselItems.map(({ src, name }, index) => (
          <div
            key={index}
            className="flex min-w-[80px] flex-shrink-0 flex-col items-center justify-center sm:min-w-[100px]"
            title={name}
          >
            <img src={src} alt={name} className="h-5 w-5 object-contain sm:h-6 sm:w-6" />
            <span className="mt-2 font-inter text-[10px] text-foreground sm:text-xs">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCarousel;
