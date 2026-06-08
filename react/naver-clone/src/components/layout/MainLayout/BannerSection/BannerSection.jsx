import styles from './BannerSection.module.scss';

export function BannerSection() {
  return (
    <section className={styles.banner}>
      <a href="#" target="_blank" className={styles.link} rel="noopener noreferrer">
        <img className={styles.img} src="https://ssl.pstatic.net/melona/libs/1568/1568424/44879831f193da5f455d_20260604172954163.jpg" width="830" height="130" alt="광고 배너" />
      </a>
    </section>
  );
}
