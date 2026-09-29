import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';

import styles from './AccountButton.module.scss';

export function AccountButton() {
  return (
    <Link
      href="https://sso.elysiac.fun/settings/account"
      target="_blank"
      rel="noreferrer"
      className={styles.account}
    >
      <span>Настройки аккаунта</span>
      <FiArrowUpRight />
    </Link>
  );
}
