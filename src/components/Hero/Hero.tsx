import styles from './Hero.module.scss';
import { HeroBackground } from '@/src/components/Hero/Background/HeroBackground';
import { HeroContent } from '@/src/components/Hero/Content/HeroContent';

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <HeroBackground />
        <HeroContent />
      </div>
    </section>
  );
}
