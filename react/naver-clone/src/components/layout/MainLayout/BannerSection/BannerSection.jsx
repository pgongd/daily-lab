import styles from './BannerSection.module.scss';

export function BannerSection() {
  return (
    <section className={styles.banner}>
      <a href="#" target="_blank" className={styles.link} rel="noopener noreferrer">
        <img className={styles.img} src="https://ssl.pstatic.net/melona/libs/1565/1565558/659d4f00131b29afb740_20260529114244360.png" alt="광고 배너" />
      </a>
    </section>
  );
}
