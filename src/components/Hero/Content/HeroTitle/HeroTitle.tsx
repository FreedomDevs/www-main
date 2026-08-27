import styles from './HeroTitle.module.scss';

export function HeroTitle() {
  return (
    <h1 className={styles.title}>
      <span className={styles.main}>Один проект</span>
      <span className={styles.accent}>Вся инфраструктура</span>
    </h1>
  );
}
