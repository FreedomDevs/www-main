import styles from './HeroContent.module.scss';

import { HeroActions } from './HeroActions/HeroActions';
import { HeroNote } from './HeroNote/HeroNote';
import { HeroTitle } from './HeroTitle/HeroTitle';
import { HeroTopLine } from './HeroTopLine/HeroTopLine';

export function HeroContent() {
  return (
    <div className={styles.content}>
      <HeroTopLine />

      <HeroTitle />

      <p className={styles.description}>
        ElysiaCloud объединяет облачную инфраструктуру, защиту, сеть и
        управление сервисами в одной платформе.
      </p>

      <HeroActions />

      <HeroNote />
    </div>
  );
}
