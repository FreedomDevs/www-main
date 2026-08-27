'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FiArrowUpRight, FiChevronDown } from 'react-icons/fi';

import styles from './ProductsMenu.module.scss';

const productCategories = [
  {
    title: 'Облачные решения',
    items: [
      {
        title: 'Cloud Hosting',
        description: 'Облачный хостинг',
        href: '/hosting',
      },
      {
        title: 'Minecraft',
        description: 'Хостинг игровых серверов',
        href: '/minecraft',
      },
      {
        title: 'Cloud Drop',
        description: 'Деплой статических сайтов',
        href: '/drop',
      },
    ],
  },
  {
    title: 'Инструменты',
    items: [
      {
        title: 'Monitoring',
        description: 'Мониторинг инфраструктуры',
        href: '/monitoring',
      },
      {
        title: 'API',
        description: 'Управление через API',
        href: '/api',
      },
      {
        title: 'Documentation',
        description: 'Документация платформы',
        href: '/docs',
      },
    ],
  },
];

export function ProductsMenu() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={wrapperRef}
      className={`${styles.wrapper} ${open ? styles.open : ''}`}
    >
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setOpen((value) => !value)}
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
                onClick={() => setOpen(false)}
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
