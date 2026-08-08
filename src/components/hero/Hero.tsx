import Link from 'next/link';
import { FiArrowUpRight, FiZap, FiActivity, FiServer } from 'react-icons/fi';

import styles from './Hero.module.scss';
import { Button } from '@/src/components/ui/Button';
import clsx from 'clsx';

const stats = [
  {
    value: '99.99%',
    label: 'Uptime',
    icon: FiActivity,
  },
  {
    value: '< 1ms',
    label: 'Network latency',
    icon: FiZap,
  },
  {
    value: '24/7',
    label: 'Monitoring',
    icon: FiServer,
  },
];

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.grid} />

      <div className={styles.glow} />

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            ElysiaCloud Infrastructure
          </div>

          <h1 className={styles.title}>
            Infrastructure
            <br />
            built for <span>speed.</span>
          </h1>

          <p className={styles.description}>
            High-performance cloud infrastructure for applications that
            can&apos;t afford to slow down.
          </p>

          <div className={styles.actions}>
            <Button size="md" variant="primary" rightIcon={<FiArrowUpRight />}>
              Get started
            </Button>

            <Link href="#infrastructure" className={styles.secondaryButton}>
              Explore infrastructure
            </Link>
          </div>

          <div className={styles.stats}>
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div key={stat.label} className={styles.stat}>
                  <div className={styles.statIcon}>
                    <Icon />
                  </div>

                  <div className={styles.statContent}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.visualGlow} />

          <div className={styles.network}>
            <div className={clsx(styles.networkLine, styles.networkLineOne)} />

            <div className={clsx(styles.networkLine, styles.networkLineTwo)} />

            <div
              className={clsx(styles.networkLine, styles.networkLineThree)}
            />

            <div className={clsx(styles.networkLine, styles.networkLineFour)} />

            <div className={clsx(styles.networkLine, styles.networkLineFive)} />

            <div className={clsx(styles.packet, styles.packetOne)} />
            <div className={clsx(styles.packet, styles.packetTwo)} />
            <div className={clsx(styles.packet, styles.packetThree)} />
          </div>

          <div className={clsx(styles.serverNode, styles.serverNodeTop)}>
            <FiServer />

            <span className={styles.nodeStatus} />
          </div>

          <div className={clsx(styles.serverNode, styles.serverNodeLeft)}>
            <FiServer />

            <span className={styles.nodeStatus} />
          </div>

          <div className={clsx(styles.serverNode, styles.serverNodeRight)}>
            <FiServer />

            <span className={styles.nodeStatus} />
          </div>

          <div className={clsx(styles.serverNode, styles.serverNodeBottom)}>
            <FiActivity />

            <span className={styles.nodeStatus} />
          </div>

          <div className={styles.core}>
            <div className={styles.coreRing}>
              <div className={styles.coreIcon}>
                <FiZap />
              </div>
            </div>

            <div className={styles.corePulse} />
          </div>

          <div className={styles.visualLabel}>
            <span className={styles.statusDot} />
            <span>Infrastructure online</span>
          </div>
        </div>
      </div>
    </section>
  );
}
