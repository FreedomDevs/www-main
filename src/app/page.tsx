import { Hero } from '@/src/components/Hero/Hero';
import { InfrastructureSection } from '@/src/components/infrastructure/InfrastructureSection';
import { UseCasesSection } from '@/src/components/usecases/UseCasesSection';
import { PricingSection } from '@/src/components/pricing/PricingSection';
import { Footer } from '@/src/components/footer/Footer';
import { Clients } from '@/src/components/Clients/Clients';
import { DataGrid } from '@/src/components/DataGrid/DataGrid';
import styles from './main.module.scss';
import { ProductsShowcase } from '@/src/components/ProductsShowcase/ProductsShowcase';

export default function Home() {
  return (
    <main className={styles.main}>
      <DataGrid />
      <Hero />
      <Clients />
      <ProductsShowcase />
      {/*<InfrastructureSection />*/}
      {/*<UseCasesSection />*/}
      {/*<PricingSection />*/}
      <Footer />
    </main>
  );
}
