import { Hero } from '@/src/components/hero/Hero';
import { InfrastructureSection } from '@/src/components/infrastructure/InfrastructureSection';
import { UseCasesSection } from '@/src/components/usecases/UseCasesSection';
import { PricingSection } from '@/src/components/pricing/PricingSection';
import { FinalCta } from '@/src/components/cta/FinalCta';

export default function Home() {
  return (
    <>
      <Hero />
      <InfrastructureSection />
      <UseCasesSection />
      <PricingSection />
      <FinalCta />
    </>
  );
}
