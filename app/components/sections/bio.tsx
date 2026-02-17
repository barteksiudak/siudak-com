'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'motion/react';
import styleCommon from './common.module.css';

export default function Bio() {
  const t = useTranslations('bio');

  return (
    <motion.section
      className={styleCommon.container}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 30, rotateX: -30 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          type: 'spring' as const,
          stiffness: 100,
        }}
        whileHover={{ scale: 1.05 }}
        style={{ perspective: '1000px' }}
      >
        {t('title')}
      </motion.h1>
      <motion.p
        className={styleCommon.description}
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
