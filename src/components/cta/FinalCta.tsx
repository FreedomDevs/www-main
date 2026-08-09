'use client';

import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
import clsx from 'clsx';

import styles from './FinalCta.module.scss';
import { Button } from '@/src/components/ui/Button';

export function FinalCta() {
  return (
    <section className={styles.section}>
      <div className={styles.glow} />

      <div className={styles.grid} />

      <div className={styles.container}>
        <div className={clsx(styles.content, styles.reveal)}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            ElysiaCloud
          </div>

          <h2 className={styles.title}>
            Готовы начать?
            <br />
            <span>Мы готовы.</span>
          </h2>

          <p className={styles.description}>
            Разверните свой проект на инфраструктуре, созданной для скорости,
            стабильности и роста.
          </p>

          <div className={styles.actions}>
            <Button size="md" variant="primary" rightIcon={<FiArrowUpRight />}>
              Начать работу
            </Button>

            <Link href="#pricing" className={styles.secondaryButton}>
              Посмотреть тарифы
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
