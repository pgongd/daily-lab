import { useState } from 'react';
import style from './Header.module.scss';
import { serviceIcon } from './serviceItems.js';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__top">
          <div className="header__left">
            <div className="top-menu">
              <button
                className="top-menu__btn"
                type="button"
                aria-haspopup="menu"
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                <span className="blind">전체메뉴</span>
              </button>
              <div className="top-menu__layer-box" hidden={!isMenuOpen}>
                전체메뉴 컨텐츠
              </div>
            </div>
            <div className="top-pay">
              <a href="#" className="top-pay__link">
                <span className="blind">페이 바로가기</span>
              </a>
            </div>
          </div>
          <div className="header__right">
            <div className="top-noti">
              <button type="button" className="top-noti__btn">
                <span className="blind">알림</span>
              </button>
            </div>
            <div className="top-shop">
              <a href="#" className="top-shop__link">
                <span className="blind">장바구니</span>
              </a>
            </div>
          </div>
        </div>
        <div className={style['search']}>
          <div className={style['inner']}>
            <h1 className="logo">
              <a href="#" className="logo__link">
                <svg
                  className="sv-logo"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z"></path>
                </svg>
                <span className="blind">Naver</span>
              </a>
            </h1>
            <form className={style['form']} aria-label="사이트 검색">
              <div className={style['area']}>
                <label htmlFor="search-input" className="blind">
                  검색어 입력
                </label>
                <input
                  id="search-input"
                  type="search"
                  className={style['input']}
                  placeholder="검색어를 입력하세요"
                  autoComplete="off"
                />
                <button type="submit" className={style['submit']} aria-label="검색">
                  <svg
                    viewBox="0 0 50 50"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sv_search"
                    aria-hidden="true"
                    focusable="false"
                    fill="currentColor"
                  >
                    <path d="M22.13.5c11.378 0 20.632 9.256 20.632 20.63 0 4.699-1.566 9.155-4.439 12.782l10.164 10.165a2.41 2.41 0 0 1-1.706 4.115 2.412 2.412 0 0 1-1.706-.705L33.31 35.719a2.41 2.41 0 0 1 0-3.41 15.71 15.71 0 0 0 4.628-11.178c0-8.718-7.09-15.808-15.807-15.808-8.718 0-15.808 7.09-15.808 15.808 0 7.15 4.817 13.43 11.714 15.273a2.41 2.41 0 0 1 1.705 2.954 2.41 2.41 0 0 1-2.95 1.705C7.788 38.658 1.5 30.46 1.5 21.131 1.5 9.756 10.756.5 22.13.5zm4.716 34.746a3.483 3.483 0 1 1 0 6.966 3.483 3.483 0 0 1 0-6.966z"></path>{' '}
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
        <nav className={style['shortcut']} aria-label="주요 서비스">
          <ul className={style['list']}>
            {serviceIcon.map((item) => (
              <li key={item.type} className={style['item']}>
                <a href="#" className={style['link']}>
                  <span
                    className={`${style['service-icon']} ${style[item.type]}`}
                    aria-hidden="true"
                  />
                  <span className={style['service-name']}>{item.text}</span>
                </a>
              </li>
            ))}
            <li className={`${style['item']} ${style['more']}`}>
              <button
                type="button"
                className={style['link']}
                aria-expanded={isServiceOpen}
                aria-controls="shortcutAllmenu" // 열릴 레이어 ID와 매핑
                onClick={() => setIsServiceOpen((prev) => !prev)}
                aria-label="바로가기 메뉴"
              >
                <span className={`${style['icon']} ${style['more']}`} aria-hidden="true" />
              </button>
            </li>
          </ul>
          <div id="shortcutAllmenu" className="shortcut_group" hidden={!isServiceOpen}>
            전체서비스
          </div>
        </nav>
        <div className="headline">
          <a href="#" className="headline__link" target="_blank" rel="noopener noreferrer">
            <img
              src="https://ssl.pstatic.net/melona/libs/1567/1567860/f789528a2181521bac21_20260430185253808_5.png"
              width="244"
              height="108"
              alt="라이온코리아 광고"
            />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
