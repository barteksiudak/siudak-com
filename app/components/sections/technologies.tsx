'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'motion/react';
import style from './common.module.css';
import styleTechnologies from './technologies.module.css';

export default function Technologies() {
  const t = useTranslations('technologies');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const icons = [
    { src: '/images/react.svg', alt: 'React' },
    { src: '/images/nextjs.svg', alt: 'Next.js' },
    { src: '/images/typescript.svg', alt: 'TypeScript' },
    { src: '/images/aws.svg', alt: 'AWS' },
    { src: '/images/cloudflare.svg', alt: 'Cloudflare' },
  ];

  return (
    <motion.section
      className={style.container}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 20, backgroundPosition: '0% 50%' }}
        whileInView={{ opacity: 1, y: 0, backgroundPosition: '100% 50%' }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          backgroundPosition: {
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse' as const,
          },
        }}
        whileHover={{ scale: 1.05 }}
      >
        {t('title')}
      </motion.h1>
      <motion.div
        className={styleTechnologies.icons}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {icons.map((icon, index) => (
          <motion.div key={index} variants={iconVariants}>
            <Image src={icon.src} alt={icon.alt} width={50} height={50} />
          </motion.div>
        ))}
      </motion.div>
      <motion.p
        className={style.description}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
      >
        {t('description')}
      </motion.p>
    </motion.section>
  );
}
