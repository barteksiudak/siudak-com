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
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.6, -0.05, 0.01, 0.99],
          scale: {
            type: 'spring' as const,
            stiffness: 200,
            damping: 15,
          },
        }}
        whileHover={{ scale: 1.02 }}
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
        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        aria-label="Connect on LinkedIn (opens in a new tab)"
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
        initial={{ opacity: 0, x: -20, letterSpacing: '0.5em' }}
        animate={{ opacity: 1, x: 0, letterSpacing: 'normal' }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileHover={{ letterSpacing: '0.05em' }}
      >
        {t('roles')}
      </motion.h3>
      <motion.p
        className={styleCommon.description}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
      >
        {t('description')}
      </motion.p>
      <motion.div
        className={style.heroImageContainer}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
      >
        <Image
          src="/images/hero.jpg"
          alt="Bartosz Siudak"
          className={style.heroImage}
          width={1920}
          height={1080}
          priority
        />
      </motion.div>
    </section>
  );
}
