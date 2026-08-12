'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './Legal.module.scss';

const documents = [
  {
    title: 'Пользовательское соглашение',
    href: '/legal/terms',
  },
  {
    title: 'Публичная оферта',
    href: '/legal/offer',
  },
  {
    title: 'Политика конфиденциальности',
    href: '/legal/privacy',
  },
  {
    title: 'Возврат денежных средств',
    href: '/legal/refund',
  },
];

export default function LegalNavigation() {
  const pathname = usePathname();

  return (
    <nav className={styles.navigation}>
      {documents.map((document) => {
        const isActive = pathname === document.href;

        return (
          <Link
            key={document.href}
            href={document.href}
            className={`${styles.navigationLink} ${
              isActive ? styles.active : ''
            }`}
          >
            {document.title}
          </Link>
        );
      })}
    </nav>
  );
}
