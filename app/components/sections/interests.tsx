'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'motion/react';
import style from './common.module.css';

export default function Interests() {
  const t = useTranslations('interests');

  return (
    <motion.section
      className={style.container}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 40, skewY: 5 }}
        whileInView={{ opacity: 1, y: 0, skewY: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{ skewY: -2, scale: 1.03 }}
      >
        {t('title')}
      </motion.h1>
      <motion.p
        className={style.description}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
      >
        {t('description')}
      </motion.p>
    </motion.section>
  );
}
