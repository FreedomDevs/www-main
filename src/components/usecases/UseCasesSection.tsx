'use client';

import { useEffect } from 'react';
import {
  FiActivity,
  FiCpu,
  FiDatabase,
  FiGlobe,
  FiServer,
} from 'react-icons/fi';

import styles from './UseCasesSection.module.scss';

const useCases = [
  {
    icon: FiServer,
    title: 'Minecraft-серверы',
    description:
      'Запускайте Minecraft-проекты на готовой инфраструктуре с выделенными ресурсами и низкой задержкой.',
    meta: 'Game infrastructure',
    visual: 'server',
  },
  {
    icon: FiGlobe,
    title: 'Elysia Global Proxy',
    description:
      'Объединяйте серверы в единую сеть и маршрутизируйте игроков через глобальную прокси-инфраструктуру.',
    meta: 'Global network',
    visual: 'network',
  },
  {
    icon: FiCpu,
    title: 'Backend & API',
    description:
      'Размещайте API, микросервисы и собственный backend рядом с игровой инфраструктурой.',
    meta: 'Dedicated compute',
    visual: 'compute',
  },
  {
    icon: FiDatabase,
    title: 'Сервисы и данные',
    description:
      'Размещайте базы данных, хранилища и внутренние сервисы, связанные с вашими проектами.',
    meta: 'NVMe storage',
    visual: 'database',
  },
];

export function UseCasesSection() {
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
        threshold: 0.12,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} id="product">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={`${styles.eyebrow} ${styles.reveal}`}>
            Возможности
            <span className={styles.eyebrowDot} />
          </div>

          <h2 className={`${styles.title} ${styles.reveal}`}>
            Всё, что нужно
            <br />
            <span>вашему проекту.</span>
          </h2>

          <p className={`${styles.description} ${styles.reveal}`}>
            От одного Minecraft-сервера до полноценной игровой экосистемы.
            Размещайте серверы, подключайте прокси и сервисы и управляйте всей
            инфраструктурой из ElysiaCloud.
          </p>
        </div>

        <div className={styles.useCases}>
          {useCases.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className={`${styles.useCase} ${styles.reveal}`}
                style={{
                  transitionDelay: `${index * 90}ms`,
                }}
              >
                <div className={styles.cardTop}>
                  <div className={styles.icon}>
                    <Icon />
                  </div>

                  <span className={styles.arrow}>↗</span>
                </div>

                <div className={styles.cardContent}>
                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>

                <div className={styles.cardVisual}>
                  {item.visual === 'network' && (
                    <div className={styles.networkVisual}>
                      <span />
                      <span />
                      <span />
                      <span />
                      <div />
                    </div>
                  )}

                  {item.visual === 'server' && (
                    <div className={styles.serverVisual}>
                      <div>
                        <span />
                        <span />
                        <span />
                      </div>

                      <div>
                        <span />
                        <span />
                        <span />
                      </div>

                      <div>
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  )}

                  {item.visual === 'database' && (
                    <div className={styles.databaseVisual}>
                      <div />
                      <div />
                      <div />
                    </div>
                  )}

                  {item.visual === 'compute' && (
                    <div className={styles.computeVisual}>
                      <FiActivity />

                      <div className={styles.computeLine}>
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  )}
                </div>

                <div className={styles.cardFooter}>
                  <span className={styles.status}>
                    <span />
                    {item.meta}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
