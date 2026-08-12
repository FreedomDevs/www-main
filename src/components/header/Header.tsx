'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi';

import styles from './Header.module.scss';
import { Button } from '@/src/components/ui/Button';

const navigation = [
  {
    label: 'Возможности',
    href: '#product',
  },
  {
    label: 'Инфраструктура',
    href: '#infrastructure',
  },
  {
    label: 'Тарифы',
    href: '#pricing',
  },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((value) => !value);
  };

  const redirectToDashboard = () => {
    window.location.href = 'https://admin.elysiac.fun/';
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <Image
            src="/logo.svg"
            alt="ElysiaCloud"
            width={36}
            height={36}
            priority
          />

          <span className={styles.logoName}>
            Elysia<span>Cloud</span>
          </span>
        </Link>

        <nav className={styles.nav}>
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <Link href="https://sso.elysiac.fun/" className={styles.login}>
            Sign in
          </Link>

          <Button
            size="sm"
            variant="primary"
            rightIcon={<FiArrowUpRight />}
            className={styles.desktopButton}
            onClick={redirectToDashboard}
          >
            Личный кабинет
          </Button>

          <button
            type="button"
            className={clsx(
              styles.menuButton,
              isMenuOpen && styles.menuButtonOpen
            )}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <div
        className={clsx(styles.mobileMenu, isMenuOpen && styles.mobileMenuOpen)}
      >
        <nav className={styles.mobileNav}>
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.mobileNavLink}
              onClick={closeMenu}
            >
              <span>{item.label}</span>

              <FiArrowUpRight />
            </Link>
          ))}
        </nav>

        <div className={styles.mobileActions}>
          <Link
            href="https://sso.elysiac.fun/"
            className={styles.mobileLogin}
            onClick={closeMenu}
          >
            Sign in
          </Link>

          <Button
            size="md"
            variant="primary"
            fullWidth
            rightIcon={<FiArrowUpRight />}
            onClick={redirectToDashboard}
          >
            Личный кабинет
          </Button>
        </div>
      </div>
    </header>
  );
}
