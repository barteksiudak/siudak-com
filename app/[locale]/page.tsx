import dynamic from 'next/dynamic';
import { Header } from '../components/header/header';
import Hero from '../components/sections/hero';
import { Footer } from '../components/footer/footer';

// Lazy load below-the-fold components
const Bio = dynamic(() => import('../components/sections/bio'), {
  loading: () => null,
});
const Founder = dynamic(() => import('../components/sections/founder'), {
  loading: () => null,
});
const Technologies = dynamic(
  () => import('../components/sections/technologies'),
  {
    loading: () => null,
  }
);
const Interests = dynamic(() => import('../components/sections/interests'), {
  loading: () => null,
});

export default async function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Bio />
        <Founder />
        <Technologies />
        <Interests />
      </main>
      <Footer />
    </>
  );
}
