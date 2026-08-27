'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import styles from './Clients.module.scss';

const clients = [
  {
    name: 'ElysiumSMP',
    logo: '/logo.svg',
    comment:
      'ElysiaCloud позволил нам сосредоточиться на развитии проекта, а не на постоянном контроле инфраструктуры.',
    author: 'Владелец ElysiumSMP',
  },
  {
    name: 'Anivoria',
    logo: '/logo.svg',
    comment:
      'Платформа заметно упростила работу с инфраструктурой и позволила управлять сервисами в одном месте.',
    author: 'Владелец Anivoria',
  },
  {
    name: 'ElysiaID',
    logo: '/logo.svg',
    comment:
      'Единая инфраструктура ElysiaCloud отлично подходит для сервисов, которые должны работать стабильно и независимо.',
    author: 'Команда ElysiaID',
  },
];

export function Clients() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);

      setActiveIndex((current) => (current + 1) % clients.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const changeSlide = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const client = clients[activeIndex];

  return (
    <section className={styles.clients}>
      <div className={styles.frame}>
        <div className={styles.container}>
          <header className={styles.header}>
            <div className={styles.eyebrow}>
              <span />
              OUR CLIENTS
            </div>

            <h2>
              Проекты, которые
              <span>выбирают ElysiaCloud</span>
            </h2>
          </header>

          <div className={styles.slider}>
            <div className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.project}>
                  <div className={styles.logo}>
                    <Image src={client.logo} alt="" width={42} height={42} />
                  </div>

                  <h3>{client.name}</h3>
                </div>

                <span className={styles.number}>
                  {String(activeIndex + 1).padStart(2, '0')}
                </span>
              </div>

              <div
                key={activeIndex}
                className={`${styles.content} ${
                  direction === 1 ? styles.next : styles.previous
                }`}
              >
                <p className={styles.comment}>“{client.comment}”</p>

                <div className={styles.author}>
                  <span />
                  {client.author}
                </div>
              </div>
            </div>

            <div className={styles.bottom}>
              <div className={styles.progress}>
                {clients.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Показать клиента ${index + 1}`}
                    className={index === activeIndex ? styles.active : ''}
                    onClick={() => changeSlide(index)}
                  />
                ))}
              </div>

              <span className={styles.counter}>
                {String(activeIndex + 1).padStart(2, '0')}
                <i>/</i>
                {String(clients.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
