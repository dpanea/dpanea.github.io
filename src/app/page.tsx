import { Navigation } from '@/components/Navigation';
import {
  Hero,
  TrustBar,
  ValueProposition,
  Process,
  CaseStudies,
  Testimonials,
  LeadMagnet,
  About,
  Footer,
} from '@/components/sections';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <TrustBar />
        <ValueProposition />
        <Process />
        <CaseStudies />
        <Testimonials />
        <LeadMagnet />
        <About />
      </main>
      <Footer />
    </>
  );
}
