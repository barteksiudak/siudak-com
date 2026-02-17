import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './footer.module.css';
import stylesCommon from '../sections/common.module.css';

export const Footer = () => {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.content}>
        <a
          href="https://www.linkedin.com/in/bartosz-siudak-bb08a85a/"
          target="_blank"
          rel="noopener noreferrer"
          className={stylesCommon.linkedinLink}
          aria-label="Connect on LinkedIn (opens in a new tab)"
        >
          <span>{t('contactLinkedIn')}</span>
          <Image
            src="/images/linkedin.svg"
            alt=""
            width={32}
            height={32}
            aria-hidden="true"
          />
        </a>
        <p className={styles.copyright}>
          © {currentYear} Bartosz Siudak. {t('allRightsReserved')}
        </p>
      </div>
    </footer>
  );
};
