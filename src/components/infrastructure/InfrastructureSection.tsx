'use client';

import { useEffect } from 'react';
import { FiActivity, FiCpu, FiDatabase, FiGlobe, FiZap } from 'react-icons/fi';

import styles from './InfrastructureSection.module.scss';

const features = [
  {
    icon: FiCpu,
    title: 'Выделенные ресурсы',
    description:
      'CPU и RAM для ваших серверов без борьбы за ресурсы с соседями.',
  },
  {
    icon: FiDatabase,
    title: 'Быстрое NVMe-хранилище',
    description:
      'Высокая скорость диска для быстрых запусков, загрузки миров и работы сервисов.',
  },
  {
    icon: FiGlobe,
    title: 'Elysia Global Proxy',
    description:
      'Единая сеть прокси для подключения игроков и маршрутизации трафика между вашими серверами.',
  },
  {
    icon: FiActivity,
    title: 'Единая экосистема',
    description:
      'ElysiaID, SSO, мониторинг, API и управление инфраструктурой работают вместе, чтобы вам не приходилось собирать платформу по частям.',
  },
];

export function InfrastructureSection() {
  useEffect(() => {
    const elements = document.querySelectorAll(`.${styles.reveal}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add(styles.revealed);

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className={styles.section} id="infrastructure">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={`${styles.eyebrow} ${styles.reveal}`}>
            <span className={styles.eyebrowDot} />
            Инфраструктура
          </div>

          <h2 className={`${styles.title} ${styles.reveal}`}>
            Всё для вашего проекта
            <br />
            <span>в одной платформе.</span>
          </h2>

          <p className={`${styles.description} ${styles.reveal}`}>
            ElysiaCloud объединяет игровые серверы, сеть, прокси и инструменты
            управления в единую инфраструктуру. Разворачивайте проекты,
            подключайте сервисы и управляйте ими из одного места.
          </p>

          <div className={`${styles.metrics} ${styles.reveal}`}>
            <div className={styles.metric}>
              <FiZap />

              <div>
                <strong>&lt; 1 мс</strong>
                <span>Внутренняя задержка</span>
              </div>
            </div>

            <div className={styles.metric}>
              <FiGlobe />

              <div>
                <strong>1 Gbps</strong>
                <span>Пропусткная способность сети</span>
              </div>
            </div>

            <div className={styles.metric}>
              <FiActivity />

              <div>
                <strong>99.99%</strong>
                <span>Доступность</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.features}>
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className={`${styles.feature} ${styles.reveal}`}
              >
                <div className={styles.featureIcon}>
                  <Icon />
                </div>

                <div className={styles.featureContent}>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
