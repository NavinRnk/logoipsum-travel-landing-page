import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../scss/Carousel.scss';

export type TravelCard = {
  title: string;
  location?: string;
  price?: string;
  image: string;
};

type CarouselProps = {
  items: TravelCard[];
  className?: string;
  visible?: number;
  variant?: 'standard' | 'overlay';
};

export default function Carousel({
  items,
  className = '',
  visible = 4,
  variant = 'standard',
}: CarouselProps) {
  const [startIndex, setStartIndex] = useState(0);
  const numberOfCards = Math.min(visible, items.length);
  const shownItems = Array.from({ length: numberOfCards }, (_, index) => {
    return items[(startIndex + index) % items.length];
  });

  function showPrevious() {
    setStartIndex((currentIndex) => (currentIndex - 1 + items.length) % items.length);
  }

  function showNext() {
    setStartIndex((currentIndex) => (currentIndex + 1) % items.length);
  }

  return (
    <div className={`carousel ${className} carousel--${variant}`}>
      <button
        className="carousel-arrow carousel-arrow--left"
        type="button"
        aria-label="Show previous tours"
        onClick={showPrevious}
        disabled={items.length < 2}
      >
        <FaChevronLeft />
      </button>

      <div className="carousel-track">
        {shownItems.map((item, index) => (
          <article className="travel-card" key={`${item.title}-${startIndex + index}`}>
            <img src={item.image} alt={item.title} />
            <div className="travel-card__body">
              <h3>{item.title}</h3>
              {item.location && <p>{item.location}</p>}
              {item.price && <strong>{item.price}</strong>}
            </div>
          </article>
        ))}
      </div>

      <button
        className="carousel-arrow carousel-arrow--right"
        type="button"
        aria-label="Show next tours"
        onClick={showNext}
        disabled={items.length < 2}
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
