'use client';

import { useEffect } from 'react';
import {
  FiArrowUpRight,
  FiCheck,
  FiCpu,
  FiDatabase,
  FiHardDrive,
} from 'react-icons/fi';
import clsx from 'clsx';

import styles from './PricingSection.module.scss';
import { Button } from '@/src/components/ui/Button';

const plans = [
  {
    name: 'Basic',
    description: 'Для небольших проектов и сервисов.',
    price: '499 ₽',
    cpu: '1 vCPU',
    ram: '2 GB',
    storage: '30 GB',
    featured: false,
  },
  {
    name: 'Standard',
    description: 'Оптимальный баланс производительности.',
    price: '999 ₽',
    cpu: '1 vCPU',
    ram: '5 GB',
    storage: '60 GB',
    featured: true,
  },
  {
    name: 'Advanced',
    description: 'Для требовательных production-нагрузок.',
    price: '1 999 ₽',
    cpu: '3 vCPU HF',
    ram: '10 GB',
    storage: '80 GB',
    featured: false,
  },
];

export function PricingSection() {
  useEffect(() => {
    const elements = document.querySelectorAll(`.${styles.reveal}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add(styles.revealed);
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const redirectToTelegram = (planName: string) => {
    const message = encodeURIComponent(
      `Здравствуйте! Хочу подключить тариф ${planName}.`
    );

    // eslint-disable-next-line react-hooks/immutability
    window.location.href = `https://t.me/mikinol0?text=${message}`;
  };

  return (
    <section className={styles.section} id="pricing">
      <div className={styles.glow} />

      <div className={styles.container}>
        <header className={clsx(styles.header, styles.reveal)}>
          <div>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              Тарифы
            </div>

            <h2 className={styles.title}>
              Инфраструктура
              <br />
              <span>под ваш проект.</span>
            </h2>
          </div>
        </header>

        <div className={styles.plans}>
          {plans.map((plan, index) => (
            <article
              key={plan.name}
              className={clsx(
                styles.plan,
                plan.featured && styles.featured,
                styles.reveal
              )}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {plan.featured && (
                <div className={styles.badge}>
                  <span />
                  Рекомендуем
                </div>
              )}

              <div className={styles.planTop}>
                <div className={styles.planIdentity}>
                  <span className={styles.planIndex}>0{index + 1}</span>

                  <span className={styles.planName}>{plan.name}</span>
                </div>

                <p>{plan.description}</p>
              </div>

              <div className={styles.price}>
                <strong>{plan.price}</strong>
                <span>/ месяц</span>
              </div>

              <div className={styles.resources}>
                <div className={styles.resource}>
                  <div className={styles.resourceIcon}>
                    <FiCpu />
                  </div>

                  <div>
                    <span>Процессор</span>
                    <strong>{plan.cpu}</strong>
                  </div>
                </div>

                <div className={styles.resource}>
                  <div className={styles.resourceIcon}>
                    <FiDatabase />
                  </div>

                  <div>
                    <span>Память</span>
                    <strong>{plan.ram} RAM</strong>
                  </div>
                </div>

                <div className={styles.resource}>
                  <div className={styles.resourceIcon}>
                    <FiHardDrive />
                  </div>

                  <div>
                    <span>Хранилище</span>
                    <strong>{plan.storage} NVMe</strong>
                  </div>
                </div>
              </div>

              <div className={styles.planFooter}>
                <div className={styles.availability}>
                  <span />
                  Доступно сейчас
                </div>

                <Button
                  size="md"
                  variant={plan.featured ? 'primary' : 'integrations'}
                  rightIcon={<FiArrowUpRight />}
                  onClick={() => redirectToTelegram(plan.name)}
                >
                  Выбрать
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className={clsx(styles.note, styles.reveal)}>
          <FiCheck />

          <span>
            Базовая защита сети, мониторинг и панель управления включены во все
            тарифы.
          </span>

          <button type="button">
            Подробнее
            <FiArrowUpRight />
          </button>
        </div>
      </div>
    </section>
  );
}
