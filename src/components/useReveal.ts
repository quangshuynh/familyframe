import { useEffect } from 'react';

/**
 * Gentle fade-up for elements marked `data-reveal`.
 *
 * Hiding is opt-in: the `reveal-ready` class is only added once this effect
 * runs, and anything already on screen is marked visible first. If JavaScript
 * never runs, all content stays visible.
 */
export function useReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!('IntersectionObserver' in window)) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const viewport = window.innerHeight;
    for (const el of elements) {
      const rect = el.getBoundingClientRect();
      if (rect.top < viewport && rect.bottom > 0) el.classList.add('is-visible');
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );

    for (const el of elements) if (!el.classList.contains('is-visible')) observer.observe(el);
    document.documentElement.classList.add('reveal-ready');

    return () => observer.disconnect();
  }, []);
}
