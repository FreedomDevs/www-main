import Link from 'next/link';

import styles from './Legal.module.scss';
import LegalNavigation from '@/src/app/legal/LegalNavigation';

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

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href="/" className={styles.back}>
          ← Вернуться на ElysiaCloud
        </Link>

        <div className={styles.layout}>
          <aside className={styles.sidebar}>
            <span className={styles.sidebarTitle}>Документы</span>

            <LegalNavigation />
          </aside>

          <article className={styles.content}>{children}</article>
        </div>

        <footer className={styles.footer}>
          <span>© {new Date().getFullYear()} ElysiaCloud</span>

          <div>
            <Link href="/legal/terms">Соглашение</Link>
            <Link href="/legal/privacy">Конфиденциальность</Link>
            <Link href="/legal/offer">Оферта</Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
