import React, { useEffect, useMemo, useRef, useState } from 'react';

export default function Carousel({ items = [], renderItem, getKey, className = '', slideWidthClasses = 'w-[88%] sm:w-[70%] md:w-[55%] lg:w-[40%] xl:w-[32%]', showArrows = true, showDots = true }) {
  const scrollRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const keys = useMemo(() => items.map((it, idx) => (getKey ? getKey(it, idx) : idx)), [items, getKey]);

  const scrollByAmount = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.9);
    el.scrollBy({ left: dir === 'next' ? amount : -amount, behavior: 'smooth' });
  };

  const scrollToIndex = (idx) => {
    const el = scrollRef.current;
    if (!el) return;
    const child = el.children?.[idx];
    if (child) {
      el.scrollTo({ left: child.offsetLeft, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const children = Array.from(el.children || []);
      if (!children.length) return;
      const viewportCenter = el.scrollLeft + el.clientWidth / 2;
      let closestIdx = 0;
      let closestDist = Infinity;
      children.forEach((child, idx) => {
        const left = child.offsetLeft;
        const width = child.clientWidth;
        const childCenter = left + width / 2;
        const dist = Math.abs(childCenter - viewportCenter);
        if (dist < closestDist) {
          closestDist = dist;
          closestIdx = idx;
        }
      });
      setActiveSlide(closestIdx);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener('scroll', onScroll);
  }, [items.length]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.scrollTo({ left: 0, behavior: 'smooth' });
      setActiveSlide(0);
    }
  }, [keys.join('|')]);

  return (
    <div className={`relative ${className}`}>
      {showArrows && (
        <div className="pointer-events-none absolute inset-y-0 -left-20 -right-20 flex items-center justify-between">
          <button
            type="button"
            onClick={() => scrollByAmount('prev')}
            className="pointer-events-auto ml-1 hidden md:inline-flex h-12 w-12  items-center justify-center rounded-full btn-primary shadow-sm hover:border-primary/40"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => scrollByAmount('next')}
            className="pointer-events-auto mr-1 hidden md:inline-flex h-12 w-12  items-center justify-center rounded-full btn-primary shadow-sm hover:border-primary/40"
            aria-label="Next"
          >
            ›
          </button>
        </div>
      )}

      <div ref={scrollRef} className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none]" style={{ scrollbarWidth: 'none' }}>
        {items.map((item, idx) => (
          <div key={keys[idx]} className={`snap-center shrink-0 ${slideWidthClasses}`}>
            {renderItem(item, idx)}
          </div>
        ))}
      </div>

      {showDots && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={keys[i]}
              aria-label={` slide ${i + 1}`}
              onClick={() => scrollToIndex(i)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${i === activeSlide ? 'bg-primary' : 'bg-gray-200 hover:bg-gray-300'}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
