import styles from './HeroTopLine.module.scss';

export function HeroTopLine() {
  return (
    <div className={styles.topLine}>
      <div className={styles.eyebrow}>
        <span className={styles.eyebrowDot} />
        ELYSIACLOUD PLATFORM
      </div>

      <span className={styles.status}>
        <span className={styles.statusDot} />
        Все системы работают
      </span>
    </div>
  );
}
