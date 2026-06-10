import { nanoid } from 'nanoid';

//카테고리 탭 데이터
export const categoryData = [
  {
    id: 'group-news',
    isGroup: true,
    children: [
      { id: 'newsStand', label: '뉴스스탠드' },
      { id: 'newsEditing', label: '언론사편집' }
    ]
  },
  { id: 'entertainment', label: '엔터' },
  { id: 'sports', label: '스포츠' },
  { id: 'game', label: '게임' },
  { id: 'economy', label: '경제' },
  { id: 'shopping', label: '쇼핑투데이' }
];

export const newsContentByTab = {
  newsStand: {
    subCategories: [
      { id: 'baseball', label: '야구', link: '#' },
      { id: 'wbaseball', label: '해외야구', link: '#' }
    ],
    mediaNews: [
      {
        id: nanoid(),
        imgUrl: '#',
        title: '슛포러브 LIVE - 안정환 월드컵 과거경기 같이보기',
        company: '중앙일보',
        time: '1시간전',
        link: '#'
      },
      {
        id: nanoid(),
        imgUrl: '#',
        title: '이정후 16경기 연속 안타… 韓 빅리거 최다기록 타이',
        company: '세계일보',
        time: '1시간전',
        link: '#'
      }
    ],
    noticeNews: [
      {
        id: nanoid(),
        text: '"보쉴리도 빠졌는데, 강팀 삼성과…" 이강철 감독의 걱정, 하지만 삼성타선은 더 안 좋았다[수원리뷰]',
        company: '연합뉴스',
        link: '#'
      },
      {
        id: nanoid(),
        text: '"韓 신기록까지 세웠는데…다승 1위 투수, 어깨 근육 손상→6주 재활 진단→대체 외인 영입 불가피 [수원 현장]',
        company: '엑스포츠뉴스',
        link: '#'
      }
    ]
  },
  sports: {
    subCategories: [
      { id: 'baseball', label: '야구', link: '#' },
      { id: 'wbaseball', label: '해외야구', link: '#' },
      { id: 'football', label: '축구', link: '#' }
    ],
    mediaNews: [
      {
        id: nanoid(),
        imgUrl: '#',
        title: '슛포러브 LIVE - 안정환 월드컵 과거경기 같이보기',
        company: '중앙일보',
        time: '1시간전',
        link: '#'
      },
      {
        id: nanoid(),
        imgUrl: '#',
        title: '이정후 16경기 연속 안타… 韓 빅리거 최다기록 타이',
        company: '세계일보',
        time: '1시간전',
        link: '#'
      }
    ],
    noticeNews: [
      {
        id: nanoid(),
        text: '"보쉴리도 빠졌는데, 강팀 삼성과…" 이강철 감독의 걱정, 하지만 삼성타선은 더 안 좋았다[수원리뷰]',
        company: '연합뉴스',
        link: '#'
      },
      {
        id: nanoid(),
        text: '"韓 신기록까지 세웠는데…다승 1위 투수, 어깨 근육 손상→6주 재활 진단→대체 외인 영입 불가피 [수원 현장]',
        company: '엑스포츠뉴스',
        link: '#'
      }
    ]
  },
  entertainment: {
    subCategories: [{ id: 'drama', label: '드라마', link: '#' }],
    subCategories: [{ id: 'movie', label: '영화', link: '#' }],
    mediaNews: [
      {
        id: 1,
        imgUrl: 'https://...',
        title: '어떤 아이돌 컴백 스포일러 뉴스',
        company: '디스패치',
        time: '30분전',
        link: '#'
      }
    ],
    noticeNews: [
      {
        id: 1,
        text: '칸 영화제 초청된 한국 영화 비하인드 스토리',
        company: '일간스포츠',
        link: '#'
      }
    ]
  }
};
