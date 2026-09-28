'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import styles from './Clients.module.scss';

const clients = [
  {
    name: 'Wolp Project',
    logo: '/wolp-icon.png',
    comment:
      'В целом ElysiaCloud понравился, всё работает стабильно, прокси норм, с регистрацией тоже всё удобно. Если возникают какие-то вопросы, поддержка быстро отвечает. Пока только положительные впечатления :)',
    author: 'Владелец Wolp kind',
  },
  {
    name: 'MTine',
    logo: '/mtine-icon.png',
    comment:
      'Хорошая платформа, прокси не лагает, регистрация вообще топовая, платформа класс!)',
    author: 'Владелец MTine darbus1',
  },
  {
    name: 'DeadCats',
    logo: '/logo.svg',
    comment:
      'Единая инфраструктура ElysiaCloud отлично подходит для сервисов, которые должны работать стабильно и независимо.',
    author: 'Владелец DeadCats Zeronib_',
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
