import { useTranslations } from 'next-intl';
import Image from 'next/image';
import style from './hero.module.css';
import styleCommon from './common.module.css';

export default function Hero() {
  const t = useTranslations('hero');
  const tFooter = useTranslations('footer');

  return (
    <section className={styleCommon.container}>
      <h1>Bartosz Siudak</h1>
      <a
        href="https://www.linkedin.com/in/bartosz-siudak-bb08a85a/"
        target="_blank"
        rel="noopener noreferrer"
        className={styleCommon.linkedinLink}
      >
        <span>{tFooter('contactLinkedIn')}</span>
        <Image
          src="/images/linkedin.svg"
          alt="LinkedIn"
          width={32}
          height={32}
        />
      </a>
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
