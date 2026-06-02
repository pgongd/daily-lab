import style from './NewsSection.module.scss';
import { useState } from 'react';

export function NewsSection() {
  const [activeTab, setActiveTab] = useState('newsStand');

  return (
    <section className={style.news}>
      <div className={style.header}>
        <div className={style.category}>
          <ul className={style.categoryList} role="tablist" aria-label="뉴스 카테고리">
            <li className={style.categoryItem}>
              <div className={style.categoryGroup}>
                <button type="button" className={style.categoryTab} role="tab" aria-selected={activeTab === 'newsStand'} aria-controls="panel-newsstand">
                  뉴스스탠드
                </button>
                <button type="button" className={style.categoryTab} role="tab" aria-selected={activeTab === 'newsEditing'}>
                  언론사편집
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className={style.newsContainer} alive-live="polite" role="tabpanel" aria-labelledby={activeTab === 'newsStand' ? 'tab-newsstand' : 'tab-editor'}>
        <div className={style.sub}>
          <ul className={style.subList}>
            <li className={style.subItem}>
              <a href="#" className={style.subLink}>
                야구
              </a>
            </li>
            <li className={style.subItem}>
              <a href="#" className={style.subLink}>
                해외야구
              </a>
            </li>
          </ul>
        </div>
        <div className={style.newsContent}>
          <div className={style.media}>
            <ul className={style.mediaList}>
              <li className={style.mediaItem}>
                <a href="#" target="_blank" rel="noopener noreferrer" className={style.link}>
                  <span className={style.thumb}>
                    <img
                      src="https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fweaving%2F20260602_20290601%2Ffile_1780362298111hwNc4.jpg%22&amp;type=nf370_208&amp;service=navermain"
                      width="185"
                      height="104"
                      className={style.img}
                      alt="한국의 로컬 식당들이 해외 브랜드에게 위협적인 이유ㅣ인터비즈"
                    />
                  </span>
                  <div className={style.info}>
                    <span className={style.title}>“내가 불운 다 가져갈게”…조유민 오열, 대표팀 로비 눈물바다 만든 마지막 인사</span>
                    <div className={style.desc}>
                      <span className={style.company}>동아일보</span>
                      <span className={style.time}>2시간전</span>
                    </div>
                  </div>
                </a>
              </li>
              <li className={style.mediaItem}>
                <a href="#" target="_blank" rel="noopener noreferrer" className={style.link}>
                  <span className={style.thumb}>
                    <img
                      src="https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fweaving%2F20260602_20290601%2Ffile_1780362298111hwNc4.jpg%22&amp;type=nf370_208&amp;service=navermain"
                      width="185"
                      height="104"
                      className={style.img}
                      alt="한국의 로컬 식당들이 해외 브랜드에게 위협적인 이유ㅣ인터비즈"
                    />
                  </span>
                  <div className={style.info}>
                    <span className={style.title}>“내가 불운 다 가져갈게”…조유민 오열, 대표팀 로비 눈물바다 만든 마지막 인사</span>
                    <div className={style.desc}>
                      <span className={style.company}>동아일보</span>
                      <span className={style.time}>2시간전</span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className={style.notice}>
            <ul className={style.noticeList}>
              <li className={style.noticeItem}>
                <a href="#" target="_blank" className={style.link} rel="noopener noreferrer">
                  <span className={style.text}>"이 이미지 잊히지 않겠지만..." 50G 징계 마친 롯데 김동혁, 팬들 앞에 고개 숙였다 "정말 잘해야겠다는 생각뿐입니다" [광주 현장인터뷰]</span>
                  <span className={style.company}>스타뉴스</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.paging}>
          <button type="button" className={style.prev}>
            <span className="blind">이전페이지</span>
          </button>
          <div className={style.pagingContent}>
            <div className={style.text}>
              <span className={style.emp}>언론사</span>
              더보기
            </div>
            <div className={style.page} aria-live="polite">
              <span className="blind">현재 페이지 17페이지 전체 21페이지</span>
              <span className={style.current} aria-hidden="true">
                17
              </span>
              <span className={style.total} aria-hidden="true">
                21
              </span>
            </div>
          </div>
          <button type="button" className={style.next}>
            <span className="blind">다음페이지</span>
          </button>
        </div>
      </div>
    </section>
  );
}
