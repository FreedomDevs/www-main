import styles from './HeroNote.module.scss';

export function HeroNote() {
  return (
    <div className={styles.note}>
      <span className={styles.line} />
      От первого сервиса до глобальной инфраструктуры
    </div>
  );
}
