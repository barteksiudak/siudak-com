import { useTranslations } from 'next-intl';
import Image from 'next/image';
import style from './hero.module.css';
import styleCommon from './common.module.css';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className={styleCommon.container}>
      <h1>Bartosz Siudak</h1>
      <h3>{t('roles')}</h3>
      <p className={styleCommon.description}>{t('description')}</p>
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
