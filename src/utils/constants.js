export const NAVIGATION_DATA = {
  about: {
    name: '협회소개',
    renderInMainNav: true,
    children: [
      { name: '인사말', path: '/greetings' },
      { name: '연혁', path: '/history' },
      { name: '오시는길', path: '/location' },
    ],
  },
  business: {
    name: '사업안내',
    renderInMainNav: true,
    children: [{ name: '교육사업', path: '/posts/education' }],
  },
  resources: {
    name: '자료실',
    renderInMainNav: true,
    children: [{ name: '자료실', path: '/posts/resources' }],
  },
  notices: {
    name: '커뮤니티',
    renderInMainNav: true,
    children: [
      { name: '공지사항', path: '/posts/announcements' },
      { name: '자유게시판', path: '/posts/forum' },
      { name: 'QnA', path: '/posts/qna' },
    ],
  },
  users: {
    name: '회원 서비스',
    children: [
      { name: '로그인', path: '/login', requiredLogin: false },
      { name: '회원가입', path: '/signup', requiredLogin: false },
      { name: '마이페이지', path: '/mypage', requiredLogin: true },
    ],
  },
};

export const VALID_POST_CATEGORIES = [
  'qna',
  'announcements',
  'forum',
  'resources',
  'education',
];

export const POSTS_LIMIT = 8;
