'use client';

import Link from 'next/link';

import { Logo } from './Logo/Logo';
import { Navigation } from './Navigation/Navigation';
import { AccountButton } from './AccountButton/AccountButton';

import styles from './Header.module.scss';

export function Header() {
  return (
    <div className={styles.main__container}>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link href="/" className={styles.brand}>
            Elysia<span>Cloud</span>
          </Link>

          <Navigation />

          <AccountButton />
        </div>
      </header>

      <Logo />
    </div>
  );
}
