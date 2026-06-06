import style from './MainLayout.module.scss';
import { BannerSection } from './BannerSection/BannerSection';
import { NewsSection } from './NewsSection/NewsSection';

function MainLayout() {
  return (
    <main className="main">
      <div className="layout-left">
        <BannerSection />
        <NewsSection />
        <section className="shop-area">쇼핑</section>
        <section className="webtoon-area">웹툰</section>
      </div>
      <div className="layout-right">
        <section className="login-area">로그인</section>
        <section className="ad-area">광고</section>
        <section className="weather-area">날씨</section>
        <section className="stock-area">증시</section>
        <section className="widget-area">위젯</section>
      </div>
    </main>
  );
}

export default MainLayout;
