'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from './ProductsShowcase.module.scss';
import { products } from '@/src/components/ProductsShowcase/products';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export function ProductsShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const context = gsap.context(() => {
      const cards = cardsRef.current;

      const deckHeight = cards[0]?.parentElement?.offsetHeight ?? 430;
      const exitY = -(deckHeight + 80);

      gsap.set(cards, {
        y: (index) => (index === 0 ? 0 : 22 * index),
        scale: (index) => 1 - index * 0.03,
        rotation: 0,
        zIndex: (index) => products.length - index,
        transformOrigin: 'center top',
      });

      const timeline = gsap.timeline({
        defaults: {
          ease: 'power3.inOut',
        },

        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: `+=${products.length * 75}%`,
          pin: true,
          scrub: 0.75,
          anticipatePin: 1,

          onUpdate: (self) => {
            const progress = self.progress;

            if (progressRef.current) {
              gsap.set(progressRef.current, {
                scaleX: progress,
              });
            }

            const activeIndex = Math.min(
              products.length - 1,
              Math.floor(progress * products.length)
            );

            cards.forEach((card, index) => {
              if (index < activeIndex) {
                gsap.set(card, {
                  zIndex: index,
                });

                return;
              }

              if (index === activeIndex) {
                gsap.set(card, {
                  zIndex: products.length + 10,
                });

                return;
              }

              gsap.set(card, {
                zIndex: products.length - index,
              });
            });
          },
        },
      });

      products.forEach((_, index) => {
        if (index === 0) return;

        const at = index - 1;

        timeline.to(
          cards[index - 1],
          {
            y: exitY,
            scale: 0.9,
            rotation: -1.5,
            duration: 1,
          },
          at
        );

        timeline.to(
          cards[index],
          {
            y: 0,
            scale: 1,
            rotation: 0,
            duration: 1,
          },
          at
        );
      });
    }, section);

    return () => context.revert();
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      '--mx',
      `${event.clientX - rect.left}px`
    );
    event.currentTarget.style.setProperty(
      '--my',
      `${event.clientY - rect.top}px`
    );
  };

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.lines}>
        <div className={styles.topLine} />
        <div className={styles.bottomLine} />
      </div>

      <div className={styles.container}>
        <div className={styles.heading}>
          <div className={styles.headingTop}>
            <span>ECOSYSTEM</span>
          </div>

          <div className={styles.headingMain}>
            <h2>
              Продукты
              <span>Elysia.</span>
            </h2>

            <p>
              Инфраструктура, инструменты и сервисы для создания современной
              Minecraft-экосистемы.
            </p>
          </div>
        </div>

        <div className={styles.deck}>
          {products.map((product, index) => (
            <div
              key={product.title}
              ref={(element) => {
                if (element) cardsRef.current[index] = element;
              }}
              className={styles.card}
              onMouseMove={handleMouseMove}
            >
              <span className={styles.watermark} aria-hidden>
                0{index + 1}
              </span>

              <span className={styles.spotlight} aria-hidden />
              <span className={styles.glow} aria-hidden />

              <div className={styles.top}>
                <span className={styles.index}>
                  0{index + 1} <i>/ 0{products.length}</i>
                </span>

                <span className={styles.category}>{product.category}</span>
              </div>

              <div className={styles.content}>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </div>

              <Link href={product.href} className={styles.bottom}>
                <span>Explore product</span>

                <span className={styles.arrow}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M3 11L11 3M11 3H4M11 3V10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          ))}
        </div>

        <div className={styles.scrollHint}>
          <span>Scroll to explore</span>

          <div className={styles.track}>
            <div ref={progressRef} className={styles.progress} />
          </div>

          <span className={styles.counter}>01 — 0{products.length}</span>
        </div>
      </div>
    </section>
  );
}
