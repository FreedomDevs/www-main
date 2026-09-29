import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';

import styles from './AccountButton.module.scss';

export function AccountButton() {
  return (
    <Link href="/dashboard" className={styles.account}>
      <span>Настройки аккаунта</span>
      <FiArrowUpRight />
    </Link>
  );
}
