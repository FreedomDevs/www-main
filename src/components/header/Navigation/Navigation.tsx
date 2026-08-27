import Link from 'next/link';

import { ProductsMenu } from '../ProductsMenu/ProductsMenu';

import styles from './Navigation.module.scss';

export function Navigation() {
  return (
    <nav className={styles.nav}>
      <ProductsMenu />

      <Link href="/about" className={styles.link}>
        О нас
      </Link>

      <Link href="/pricing" className={styles.link}>
        Цены
      </Link>
    </nav>
  );
}
