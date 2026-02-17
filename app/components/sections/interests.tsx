import { useTranslations } from 'next-intl';
import Image from 'next/image';
import style from './common.module.css';

export default function Interests() {
  const t = useTranslations('interests');

  return (
    <section className={style.container}>
      <h1>{t('title')}</h1>
      <p className={style.description}>{t('description')}</p>
    </section>
  );
}
