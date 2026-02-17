import { useTranslations, useMessages } from 'next-intl';
import Image from 'next/image';
import styleCommon from './common.module.css';

export default function Founder() {
  const t = useTranslations('founder');
  const keyFunctions = useTranslations('founder.keyFunctions');
  const messages = useMessages();

  // Get the actual array from messages
  const keyFunctionsArray = (messages as any).founder.keyFunctions || [];

  return (
    <section className={styleCommon.container}>
      <h1>{t('title')}</h1>
      <div className={styleCommon.halfContainer}>
        <div className={styleCommon.imageContainer}>
          <Image
            src="/images/selfexpo-logo.svg"
            alt="SelfExpo"
            width={300}
            height={300}
          />
        </div>
        <div className={styleCommon.contentContainer}>
          <p>{t('description')}</p>
          <ul>
            {keyFunctionsArray.map((_: any, index: number) => (
              <li key={index}>
                <strong>{keyFunctions(`${index}.title`)}</strong>:{' '}
                <span>{keyFunctions(`${index}.description`)}</span>
              </li>
            ))}
          </ul>
          <br />
          <h3>
            {t.rich('link', {
              link: (chunks) => (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://selfexpo.eu"
                >
                  {chunks}
                </a>
              ),
            })}
          </h3>
        </div>
      </div>
    </section>
  );
}
