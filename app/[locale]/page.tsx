import { Header } from '../components/header/header';
import Hero from '../components/sections/hero';
import Bio from '../components/sections/bio';
import Founder from '../components/sections/founder';
import Technologies from '../components/sections/technologies';
import Interests from '../components/sections/interests';
import { Footer } from '../components/footer/footer';

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
