import styles from './DataGrid.module.scss';

export function DataGrid() {
  return (
    <div className={styles.grid} aria-hidden="true">
      <div className={`${styles.line} ${styles.leftOuter}`}>
        <span className={styles.packet} />
      </div>

      <div className={`${styles.line} ${styles.leftInner}`}>
        <span className={styles.packet} />
      </div>

      <div className={`${styles.line} ${styles.rightInner}`}>
        <span className={styles.packet} />
      </div>

      <div className={`${styles.line} ${styles.rightOuter}`}>
        <span className={styles.packet} />
      </div>

      <div className={styles.leftDots} />
      <div className={styles.rightDots} />
    </div>
  );
}
