import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000, stopOnInteraction: false })]);

  return (
    <div className="fixed inset-0 overflow-hidden z-[-1]"> {/* Changé 'absolute' en 'fixed' et ajouté 'z-[-1]' */}
      <div className="embla h-full w-full" ref={emblaRef}>
        <div className="embla__container h-full">
          {images.map((image, index) => (
            <div className="embla__slide relative h-full w-full flex-shrink-0 flex-grow-0 basis-full" key={index}>
              <img
                src={image}
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