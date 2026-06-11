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
    pagess: [
      {
        mediaNews: [
          {
            id: nanoid(),
            imgUrl:
              'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fweaving%2F20260602_20290601%2Ffile_1780362298111hwNc4.jpg%22&amp;type=nf370_208&amp;service=navermain',
            title: '한국의 로컬 식당들이 해외 브랜드에게 위협적인 이유ㅣ인터비즈',
            company: '중앙일보',
            time: '1시간전',
            link: '#'
          },
          {
            id: nanoid(),
            imgUrl:
              'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fweaving%2F20260602_20290601%2Ffile_1780362298111hwNc4.jpg%22&amp;type=nf370_208&amp;service=navermain',
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
      {
        mediaNews: [
          {
            id: nanoid(),
            imgUrl:
              'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fweaving%2F20260602_20290601%2Ffile_1780362298111hwNc4.jpg%22&amp;type=nf370_208&amp;service=navermain',
            title: '2페이지',
            company: '중앙일보',
            time: '1시간전',
            link: '#'
          },
          {
            id: nanoid(),
            imgUrl:
              'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fweaving%2F20260602_20290601%2Ffile_1780362298111hwNc4.jpg%22&amp;type=nf370_208&amp;service=navermain',
            title: '2페이지',
            company: '세계일보',
            time: '1시간전',
            link: '#'
          }
        ],
        noticeNews: [
          {
            id: nanoid(),
            text: '2페이지',
            company: '연합뉴스',
            link: '#'
          },
          {
            id: nanoid(),
            text: '2페이지',
            company: '엑스포츠뉴스',
            link: '#'
          }
        ]
      }
    ]
  },
  newsEditing: {
    pagess: [
      {
        mediaNews: [
          {
            id: nanoid(),
            imgUrl:
              'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fweaving%2F20260602_20290601%2Ffile_1780362298111hwNc4.jpg%22&amp;type=nf370_208&amp;service=navermain',
            title: '언론사편집 1',
            company: '중앙일보',
            time: '1시간전',
            link: '#'
          },
          {
            id: nanoid(),
            imgUrl:
              'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fweaving%2F20260602_20290601%2Ffile_1780362298111hwNc4.jpg%22&amp;type=nf370_208&amp;service=navermain',
            title: '언론사편집 2',
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
      }
    ]
  },
  entertainment: {
    subCategories: [
      { id: 'drama', label: '드라마', link: '#' },
      { id: 'movie', label: '영화', link: '#' }
    ],
    pagess: [
      {
        mediaNews: [
          {
            id: nanoid(),
            imgUrl:
              'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fimgnews%2Fimage%2F468%2F2026%2F06%2F11%2F0001246392_001_20260611095112565.png%22&amp;type=nf370_208&amp;service=navermain',
            title: '5번째 음주운전 손승원, 오늘 1심 선고…검찰 "징역 4년" 구형',
            company: '디스패치',
            time: '30분전',
            link: '#'
          }
        ],
        noticeNews: [
          {
            id: nanoid(),
            text: '칸 영화제 초청된 한국 영화 비하인드 스토리',
            company: '일간스포츠',
            link: '#'
          }
        ]
      }
    ]
  },
  sports: {
    subCategories: [
      { id: 'baseball', label: '야구', link: '#' },
      { id: 'wbaseball', label: '해외야구', link: '#' },
      { id: 'football', label: '축구', link: '#' }
    ],
    pages: [
      {
        mediaNews: [
          {
            id: nanoid(),
            imgUrl:
              'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fweaving%2F20260602_20290601%2Ffile_1780362298111hwNc4.jpg%22&amp;type=nf370_208&amp;service=navermain',
            title: '슛포러브 LIVE - 안정환 월드컵 과거경기 같이보기',
            company: '중앙일보',
            time: '1시간전',
            link: '#'
          },
          {
            id: nanoid(),
            imgUrl:
              'https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fweaving%2F20260602_20290601%2Ffile_1780362298111hwNc4.jpg%22&amp;type=nf370_208&amp;service=navermain',
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
      }
    ]
  },
  game: {
    subCategories: [
      { id: 'roung', label: '게임라운지', link: '#' },
      { id: 'esports', label: 'e스포츠', link: '#' }
    ],
    pages: [
      {
        mediaNews: [
          {
            id: nanoid(),
            imgUrl:
              'https://s.pstatic.net/dthumb.phinf/?src=%22https%3…-11T20%253A00%22&type=nf370_208&service=navermain',
            title: '리그오브레전드',
            company: '디스패치',
            time: '30분전',
            link: '#'
          },
          {
            id: nanoid(),
            imgUrl:
              'https://s.pstatic.net/dthumb.phinf/?src=%22https%3…-11T20%253A00%22&type=nf370_208&service=navermain',
            title: '리그오브레전드',
            company: '디스패치',
            time: '30분전',
            link: '#'
          }
        ],
        noticeNews: [
          {
            id: nanoid(),
            text: '칸 영화제 초청된 한국 영화 비하인드 스토리',
            company: '일간스포츠',
            link: '#'
          }
        ]
      }
    ]
  },
  economy: {
    subCategories: [
      { id: 'roung', label: '게임라운지', link: '#' },
      { id: 'esports', label: 'e스포츠', link: '#' }
    ],
    pages: [
      {
        mediaNews: [
          {
            id: nanoid(),
            imgUrl:
              'https://s.pstatic.net/dthumb.phinf/?src=%22https%3…-11T20%253A00%22&type=nf370_208&service=navermain',
            title: '리그오브레전드',
            company: '디스패치',
            time: '30분전',
            link: '#'
          },
          {
            id: nanoid(),
            imgUrl:
              'https://s.pstatic.net/dthumb.phinf/?src=%22https%3…-11T20%253A00%22&type=nf370_208&service=navermain',
            title: '리그오브레전드',
            company: '디스패치',
            time: '30분전',
            link: '#'
          }
        ],
        noticeNews: [
          {
            id: nanoid(),
            text: '칸 영화제 초청된 한국 영화 비하인드 스토리',
            company: '일간스포츠',
            link: '#'
          }
        ]
      }
    ]
  },
  shopping: {
    subCategories: [
      { id: 'roung', label: '게임라운지', link: '#' },
      { id: 'esports', label: 'e스포츠', link: '#' }
    ],
    pages: [
      {
        mediaNews: [
          {
            id: nanoid(),
            imgUrl:
              'https://s.pstatic.net/dthumb.phinf/?src=%22https%3…-11T20%253A00%22&type=nf370_208&service=navermain',
            title: '리그오브레전드',
            company: '디스패치',
            time: '30분전',
            link: '#'
          },
          {
            id: nanoid(),
            imgUrl:
              'https://s.pstatic.net/dthumb.phinf/?src=%22https%3…-11T20%253A00%22&type=nf370_208&service=navermain',
            title: '리그오브레전드',
            company: '디스패치',
            time: '30분전',
            link: '#'
          }
        ],
        noticeNews: [
          {
            id: nanoid(),
            text: '칸 영화제 초청된 한국 영화 비하인드 스토리',
            company: '일간스포츠',
            link: '#'
          }
        ]
      }
    ]
  }
};
