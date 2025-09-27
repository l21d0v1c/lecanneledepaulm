import React, { useEffect } from 'react';
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface CarouselImage {
  src: string;
  textColor: 'light' | 'dark'; // 'light' means text should be light (white), 'dark' means text should be dark (black)
}

interface ImageCarouselProps {
  images: CarouselImage[];
  onSlideChange: (index: number) => void;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, onSlideChange }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000, stopOnInteraction: false })]);

  useEffect(() => {
    if (!emblaApi) return;

    const handleSelect = () => {
      onSlideChange(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', handleSelect);
    emblaApi.on('init', handleSelect); // Call on init to set initial state

    return () => {
      emblaApi.off('select', handleSelect);
      emblaApi.off('init', handleSelect);
    };
  }, [emblaApi, onSlideChange]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="embla h-full w-full" ref={emblaRef}>
        <div className="embla__container h-full">
          {images.map((image, index) => (
            <div className="embla__slide relative h-full w-full flex-shrink-0 flex-grow-0 basis-full" key={index}>
              <img
                src={image.src}
                alt={`Cannelé background ${index + 1}`}
                className="absolute inset-0 h-full w-full object-cover filter-none"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;