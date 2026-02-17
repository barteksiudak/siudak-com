import { useTranslations } from 'next-intl';
import styleCommon from './common.module.css';

export default function Bio() {
  const t = useTranslations('bio');

  return (
    <section className={styleCommon.container}>
      <h1>{t('title')}</h1>
      <p className={styleCommon.description}>{t('description')}</p>
    </section>
  );
}
