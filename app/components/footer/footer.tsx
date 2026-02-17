import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './footer.module.css';

export const Footer = () => {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <a
          href="https://www.linkedin.com/in/bartosz-siudak-bb08a85a/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkedinLink}
        >
          <span>{t('contactLinkedIn')}</span>
          <Image
            src="/images/linkedin.svg"
            alt="LinkedIn"
            width={32}
            height={32}
          />
        </a>
        <p className={styles.copyright}>
          © {currentYear} Bartosz Siudak. {t('allRightsReserved')}
        </p>
      </div>
    </footer>
  );
};
