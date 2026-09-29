import Link from 'next/link';
import { FiArrowUpRight, FiGithub, FiHeart } from 'react-icons/fi';

import styles from './Footer.module.scss';

const navigation = [
  {
    title: 'Продукты',
    links: [
      { label: 'ElysiaCloud', href: '/minecraft' },
      { label: 'ElysiaID', href: '/elysia-id' },
      { label: 'ElysiaGlobalProxy', href: '/global-proxy' },
      { label: 'ElysiaClient', href: '/client' },
      { label: 'CloudDrop', href: '/drop' },
    ],
  },
  {
    title: 'Разработчикам',
    links: [
      { label: 'API', href: '/api' },
      { label: 'Документация', href: '/docs' },
    ],
  },
  {
    title: 'Организация',
    links: [
      { label: 'GitHub', href: 'https://github.com/FreedomDevs' },
      { label: 'Telegram', href: 'https://t.me/ElysiaCloud' },
    ],
  },
  {
    title: 'Документы',
    links: [
      { label: 'Пользовательское соглашение', href: '/legal/terms' },
      { label: 'Публичная оферта', href: '/legal/offer' },
      { label: 'Политика конфиденциальности', href: '/legal/privacy' },
      { label: 'Возврат денежных средств', href: '/legal/refund' },
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
              Инфраструктура для Minecraft-проектов и сервисов, которым важны
              стабильность, скорость и контроль.
            </p>

            <div className={styles.socials}>
              <a
                href="https://github.com/FreedomDevs"
                target="_blank"
                rel="noreferrer"
                className={styles.social}
              >
                <FiGithub />
                <span>GitHub</span>
                <FiArrowUpRight />
              </a>

              <a
                href="https://t.me/ElysiaCloud"
                target="_blank"
                rel="noreferrer"
                className={styles.social}
              >
                <span className={styles.telegramIcon}>✈</span>
                <span>Telegram</span>
                <FiArrowUpRight />
              </a>
            </div>
          </div>

          <div className={styles.navigation}>
            {navigation.map((group) => (
              <div key={group.title} className={styles.column}>
                <span className={styles.columnTitle}>{group.title}</span>

                {group.links.map((link) => {
                  const external = link.href.startsWith('http');

                  if (external) {
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.link}
                      >
                        {link.label}
                        <FiArrowUpRight />
                      </a>
                    );
                  }

                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={styles.link}
                    >
                      {link.label}
                    </Link>
                  );
                })}
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
