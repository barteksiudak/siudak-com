import { useTranslations } from 'next-intl';
import Image from 'next/image';
import style from './common.module.css';
import styleTechnologies from './technologies.module.css';

export default function Technologies() {
  const t = useTranslations('technologies');

  return (
    <section className={style.container}>
      <h1>{t('title')}</h1>
      <div className={styleTechnologies.icons}>
        <Image src="/images/react.svg" alt="React" width={50} height={50} />
        <Image src="/images/nextjs.svg" alt="Next.js" width={50} height={50} />
        <Image
          src="/images/typescript.svg"
          alt="TypeScript"
          width={50}
          height={50}
        />
        <Image src="/images/aws.svg" alt="AWS" width={50} height={50} />
        <Image
          src="/images/cloudflare.svg"
          alt="Cloudflare"
          width={50}
          height={50}
        />
      </div>
      <p className={style.description}>{t('description')}</p>
    </section>
  );
}
