'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from './Logo.module.scss';

export function Logo() {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === '/') {
      event.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Link href="/" className={styles.logo} onClick={handleClick}>
      <Image
        src="/logo.svg"
        alt="ElysiaCloud"
        width={42}
        height={42}
        priority
      />
    </Link>
  );
}
