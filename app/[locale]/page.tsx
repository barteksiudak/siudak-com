import { getTranslations } from 'next-intl/server';
import { Header } from '../components/header/header';
import Hero from '../components/sections/hero';

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations('home');

  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
    </>
  );
}
