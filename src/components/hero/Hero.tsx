import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';

import styles from './Hero.module.scss';
import { Button } from '@/src/components/ui/Button';
import { HeroStats } from '@/src/components/hero/HeroStats';

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.grid} />
      <div className={styles.glow} />

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Облачная платформа ElysiaCloud
          </div>

          <h1 className={styles.title}>
            Инфраструктура
            <br />
            <span>без компромиссов.</span>
          </h1>

          <p className={styles.description}>
            Надёжная облачная платформа для проектов, которым важны
            производительность, стабильность и скорость.
          </p>

          <div className={styles.actions}>
            <Button size="md" variant="primary" rightIcon={<FiArrowUpRight />}>
              Начать работу
            </Button>

            <Link href="#infrastructure" className={styles.secondaryButton}>
              Узнать больше
            </Link>
          </div>

          <HeroStats />
        </div>
      </div>
    </section>
  );
}
