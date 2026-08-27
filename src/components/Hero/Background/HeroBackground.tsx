import Image from 'next/image';

import styles from './HeroBackground.module.scss';

export function HeroBackground() {
  return (
    <>
      <Image
        src="/heroimg.jpg"
        alt=""
        fill
        priority
        unoptimized
        className={styles.image}
      />

      <div className={styles.overlay} />
      <div className={styles.glow} />
    </>
  );
}
