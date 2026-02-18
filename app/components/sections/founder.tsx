'use client';

import { useTranslations, useMessages } from 'next-intl';
import Image from 'next/image';
import { motion } from 'motion/react';
import styleCommon from './common.module.css';

export default function Founder() {
  const t = useTranslations('founder');
  const keyFunctions = useTranslations('founder.keyFunctions');
  const messages = useMessages();

  // Get the actual array from messages
  const keyFunctionsArray = (messages as any).founder.keyFunctions || [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.section
      className={styleCommon.container}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      aria-label={t('sectionLabel')}
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          delay: 0.2,
          type: 'spring' as const,
          stiffness: 120,
          damping: 12,
        }}
        whileHover={{ scale: 1.05, rotate: 2 }}
      >
        {t('title')}
      </motion.h1>
      <div className={styleCommon.halfContainer}>
        <motion.div
          className={styleCommon.imageContainer}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
        >
          <Image
            src="/images/selfexpo-logo.svg"
            alt={t('logoAlt')}
            width={300}
            height={300}
          />
        </motion.div>
        <motion.div
          className={styleCommon.contentContainer}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p variants={itemVariants}>
            <strong>{t('description')}</strong>
          </motion.p>
          <br />
          <motion.ul variants={containerVariants}>
            {keyFunctionsArray.map((_: any, index: number) => (
              <motion.li key={index} variants={itemVariants}>
                <strong>{keyFunctions(`${index}.title`)}</strong>:{' '}
                <span>{keyFunctions(`${index}.description`)}</span>
              </motion.li>
            ))}
          </motion.ul>
          <br />
          <motion.h3 variants={itemVariants} className={styleCommon.left}>
            {t.rich('link', {
              link: (chunks) => (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://selfexpo.eu"
                  aria-label={t('externalLinkLabel')}
                >
                  {chunks}
                </a>
              ),
            })}
          </motion.h3>
        </motion.div>
      </div>
    </motion.section>
  );
}
