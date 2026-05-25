import React from 'react';
import style from './Header.module.scss';

// const cx = classNames.bind(styles);

function Header() {
  const serviceIcon = [
    { type: 'type_mail', text: '메일' },
    { type: 'type_cafe', text: '카페' },
    { type: 'type_blog', text: '블로그' },
    { type: 'type_shop', text: '쇼핑' },
    { type: 'type_news', text: '뉴스' },
    { type: 'type_stock', text: '증권' },
    { type: 'type_real', text: '부동산' },
    { type: 'type_map', text: '지도' },
    { type: 'type_webtoon', text: '웹툰' },
    { type: 'type_chzzk', text: '치지직' },
  ];

  return (
    <header className="header">
      <div className="header__inner">
        <div className={style.search}>
          <div className={style.search__inner}>
            <form className={style.search__form} role="search" aria-label="사이트 검색">
              <div className={style['search-area']}>
                <label htmlFor="search-input" className="blind">
                  검색어 입력
                </label>
                <input
                  id="search-input"
                  type="search"
                  className={style['search-group__input']}
                  placeholder="검색어를 입력하세요"
                  autoComplete="off"
                />
                <button type="submit" className={style['search-group__submit']} aria-label="검색">
                  <svg
                    id="search-btn-svg"
                    viewBox="0 0 50 50"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sv_search"
                    style={{ fill: '#f777a8' }}
                  >
                    {' '}
                    <path d="M22.13.5c11.378 0 20.632 9.256 20.632 20.63 0 4.699-1.566 9.155-4.439 12.782l10.164 10.165a2.41 2.41 0 0 1-1.706 4.115 2.412 2.412 0 0 1-1.706-.705L33.31 35.719a2.41 2.41 0 0 1 0-3.41 15.71 15.71 0 0 0 4.628-11.178c0-8.718-7.09-15.808-15.807-15.808-8.718 0-15.808 7.09-15.808 15.808 0 7.15 4.817 13.43 11.714 15.273a2.41 2.41 0 0 1 1.705 2.954 2.41 2.41 0 0 1-2.95 1.705C7.788 38.658 1.5 30.46 1.5 21.131 1.5 9.756 10.756.5 22.13.5zm4.716 34.746a3.483 3.483 0 1 1 0 6.966 3.483 3.483 0 0 1 0-6.966z"></path>{' '}
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className={style.shortcut}>
          <ul className={style.shortcut__list}>
            {serviceIcon.map((item) => (
              <li key={item.type} className={style.shortcut__item}>
                <a href="#" className={style.shortcut__link}>
                  <i
                    className={`${style['service-icon']} ${style[item.type]}`}
                    aria-hidden="true"
                  />
                  <span className={style['ervice-name']}>{item.text}</span>
                </a>
              </li>
            ))}
            <li className={`${style['shortcut__item']} ${style['shortcut__item--more']}`}>
              <button
                type="button"
                className={style.shortcut__link}
                aria-expanded="false"
                aria-controls="shortcutAllmenu" // 열릴 레이어 ID와 매핑
              >
                <span className="blind">바로가기 메뉴</span>
                <i
                  className={`${style['service-icon']} ${style['service-more']}`}
                  aria-hidden="true"
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
