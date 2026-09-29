'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { FiArrowUpRight, FiChevronDown } from 'react-icons/fi';

import styles from './ProductsMenu.module.scss';

const productCategories = [
  {
    title: 'Сервисы',
    items: [
      {
        title: 'ElysiaID',
        description: 'Аккаунты и единая авторизация',
        href: '/elysia-id',
      },
      {
        title: 'CloudDrop',
        description: 'Деплой статических сайтов',
        href: '/drop',
      },
      {
        title: 'ElysiaClient',
        description: 'Клиент для экосистемы Elysia',
        href: '/client',
      },
    ],
  },
  {
    title: 'Инфраструктура',
    items: [
      {
        title: 'ElysiaCloud',
        description: 'Инфраструктура для Minecraft-серверов',
        href: '/minecraft',
      },
      {
        title: 'ElysiaGlobalProxy',
        description: 'Глобальная сеть прокси',
        href: '/global-proxy',
      },
    ],
  },
  {
    title: 'Для разработчиков',
    items: [
      {
        title: 'API',
        description: 'Программное управление сервисами',
        href: '/api',
      },
      {
        title: 'Документация',
        description: 'Руководства и документация',
        href: '/docs',
      },
    ],
  },
];

export function ProductsMenu() {
  const [open, setOpen] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }

    setOpen(true);
  };

  const closeMenu = () => {
    closeTimeout.current = setTimeout(() => {
      setOpen(false);
    }, 120);
  };

  return (
    <div
      className={`${styles.wrapper} ${open ? styles.open : ''}`}
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
    >
      <button
        type="button"
        className={styles.trigger}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        <span>Продукты</span>

        <FiChevronDown className={styles.arrow} />
      </button>

      <div className={styles.dropdown} role="menu">
        {productCategories.map((category) => (
          <div key={category.title} className={styles.column}>
            <span className={styles.title}>{category.title}</span>

            {category.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={styles.item}
                role="menuitem"
              >
                <span>
                  <strong>{item.title}</strong>
                  <small>{item.description}</small>
                </span>

                <FiArrowUpRight />
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
