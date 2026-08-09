'use client';

import { useEffect, useState } from 'react';
import { FiActivity, FiZap, FiServer } from 'react-icons/fi';

import styles from './Hero.module.scss';

const stats = [
  {
    value: '99.99%',
    label: 'Uptime',
    type: 'percentage',
  },
  {
    value: '< 5ms',
    label: 'Network latency',
    type: 'latency',
  },
  {
    value: '24/7',
    label: 'Monitoring',
    type: 'monitoring',
  },
] as const;

function AnimatedValue({
  type,
}: {
  value: string;
  type: (typeof stats)[number]['type'];
}) {
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    const duration = 2000;
    const start = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);

      const eased = 1 - Math.pow(1 - progress, 3);

      if (type === 'percentage') {
        const current = 99.99 * eased;

        setDisplay(`${current.toFixed(2)}%`);
      }

      if (type === 'latency') {
        const current = Math.max(5, Math.ceil(20 - 15 * eased));

        setDisplay(`< ${current}ms`);
      }

      if (type === 'monitoring') {
        const current = Math.floor(24 * eased);

        setDisplay(`${current}/7`);
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [type]);

  return <strong>{display}</strong>;
}

export function HeroStats() {
  return (
    <div className={styles.stats}>
      {stats.map((stat, index) => {
        const Icon = index === 0 ? FiActivity : index === 1 ? FiZap : FiServer;

        return (
          <div key={stat.label} className={styles.stat}>
            <div className={styles.statIcon}>
              <Icon />
            </div>

            <div className={styles.statContent}>
              <AnimatedValue value={stat.value} type={stat.type} />

              <span>{stat.label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
