import Hero from '@/components/sections/Hero';
import ProblemSolution from '@/components/sections/ProblemSolution';
import Modules from '@/components/sections/Modules';
import OrganizationalMemory from '@/components/sections/OrganizationalMemory';
import UseCases from '@/components/sections/UseCases';
import SocialProof from '@/components/sections/SocialProof';
import CTASection from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <Modules />
      <OrganizationalMemory />
      <UseCases />
      <SocialProof />
      <CTASection />
    </>
  );
}
