import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';

import styles from './HeroActions.module.scss';

export function HeroActions() {
  return (
    <div className={styles.actions}>
      <Link href="https://admin.elysiac.fun/" className={styles.primary}>
        <span>Начать работу</span>

        <FiArrowUpRight className={styles.primaryArrow} />
      </Link>

      <Link href="/products" className={styles.secondary}>
        <span className={styles.secondaryIcon}>
          <FiArrowUpRight />
        </span>
        Посмотреть платформу
      </Link>
    </div>
  );
}
