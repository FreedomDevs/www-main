'use client';

import { ReactNode } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import styles from './ClientSlider.module.scss';

interface ClientSliderProps {
  children: ReactNode;
  activeIndex: number;
  total: number;
  onPrevious: () => void;
  onNext: () => void;
}

export function ClientSlider({
  children,
  activeIndex,
  total,
  onPrevious,
  onNext,
}: ClientSliderProps) {
  return (
    <div className={styles.slider}>
      <div className={styles.viewport}>{children}</div>

      <div className={styles.controls}>
        <div className={styles.progress}>
          <span
            style={{
              width: `${((activeIndex + 1) / total) * 100}%`,
            }}
          />
        </div>

        <div className={styles.navigation}>
          <span className={styles.counter}>
            {String(activeIndex + 1).padStart(2, '0')}
            <span>/</span>
            {String(total).padStart(2, '0')}
          </span>

          <button
            type="button"
            aria-label="Предыдущий клиент"
            onClick={onPrevious}
          >
            <FiArrowLeft />
          </button>

          <button type="button" aria-label="Следующий клиент" onClick={onNext}>
            <FiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
