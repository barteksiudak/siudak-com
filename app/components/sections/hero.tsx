import { useTranslations } from 'next-intl';
import Image from 'next/image';
import style from './sections.module.css';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className={style.hero}>
      <h1>Bartosz Siudak</h1>
      <h3>{t('roles')}</h3>
      <p className={style.description}>{t('description')}</p>
      <div className={style.heroImageContainer}>
        <Image
          src="/images/hero.jpg"
          alt="Bartosz Siudak"
          className={style.heroImage}
          width={1920}
          height={1080}
          priority
        />
      </div>
    </section>
  );
}
