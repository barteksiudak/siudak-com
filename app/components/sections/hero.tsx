'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'motion/react';
import style from './hero.module.css';
import styleCommon from './common.module.css';

export default function Hero() {
  const t = useTranslations('hero');
  const tFooter = useTranslations('footer');

  return (
    <section className={styleCommon.container} aria-label={t('sectionLabel')}>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: 'easeOut',
        }}
        style={{ willChange: 'transform, opacity' }}
      >
        Bartosz Siudak
      </motion.h1>
      <motion.a
        href="https://www.linkedin.com/in/bartosz-siudak-bb08a85a/"
        target="_blank"
        rel="noopener noreferrer"
        className={styleCommon.linkedinLink}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
        aria-label="Connect on LinkedIn (opens in a new tab)"
        style={{ willChange: 'transform, opacity' }}
      >
        <span>{tFooter('contactLinkedIn')}</span>
        <Image
          src="/images/linkedin.svg"
          alt=""
          width={32}
          height={32}
          aria-hidden="true"
        />
      </motion.a>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
        style={{ willChange: 'transform, opacity' }}
      >
        {t('roles')}
      </motion.h3>
      <motion.p
        className={styleCommon.description}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
        style={{ willChange: 'transform, opacity' }}
      >
        {t('description')}
      </motion.p>
      <motion.div
        className={style.heroImageContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
        style={{ willChange: 'opacity' }}
      >
        <Image
          src="/images/hero.jpg"
          alt="Bartosz Siudak"
          className={style.heroImage}
          width={1920}
          height={1080}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 1200px"
          quality={85}
          priority
        />
      </motion.div>
    </section>
  );
}
