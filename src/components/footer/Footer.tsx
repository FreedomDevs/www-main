import Link from 'next/link';
import { FiArrowUpRight, FiGithub, FiHeart } from 'react-icons/fi';

import styles from './Footer.module.scss';

const navigation = [
  {
    title: 'Продукт',
    links: [
      { label: 'Инфраструктура', href: '#infrastructure' },
      { label: 'Тарифы', href: '#pricing' },
      { label: 'Возможности', href: '#features' },
    ],
  },
  {
    title: 'Ресурсы',
    links: [
      { label: 'Документация', href: '/docs' },
      { label: 'Статус', href: '/status' },
      { label: 'Поддержка', href: '/support' },
    ],
  },
  {
    title: 'Документы',
    links: [
      { label: 'Пользовательское соглашение', href: '/legal/terms' },
      { label: 'Публичная оферта', href: '/legal/offer' },
      {
        label: 'Политика конфиденциальности',
        href: '/legal/privacy',
      },
      {
        label: 'Возврат денежных средств',
        href: '/legal/refund',
      },
    ],
  },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              Elysia<span>Cloud</span>
            </Link>

            <p>
              Облачная инфраструктура для проектов, которым важны скорость и
              стабильность.
            </p>

            <div className={styles.socials}>
              <a
                href="https://github.com/FreedomDevs"
                target="_blank"
                rel="noreferrer"
                className={styles.github}
              >
                <FiGithub />
                GitHub
                <FiArrowUpRight />
              </a>

              <a
                href="https://t.me/ElysiaCloud"
                target="_blank"
                rel="noreferrer"
                className={styles.github}
              >
                <span className={styles.telegramIcon}>✈</span>
                Telegram
                <FiArrowUpRight />
              </a>
            </div>
          </div>

          <div className={styles.navigation}>
            {navigation.map((group) => (
              <div key={group.title} className={styles.column}>
                <span className={styles.columnTitle}>{group.title}</span>

                {group.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={styles.link}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} ElysiaCloud</span>

          <span className={styles.made}>
            Built with <FiHeart /> by Elysia
          </span>
        </div>
      </div>
    </footer>
  );
}
