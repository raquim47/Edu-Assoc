export const NAVIGATION_DATA = {
  about: {
    name: '협회소개',
    path: '/about',
    renderInMainNav: true,
    children: [
      { name: '인사말', path: '/about/greetings' },
      { name: '연혁', path: '/about/history' },
      { name: '정관', path: '/about/constitution' },
      { name: '임원진', path: '/about/executives' },
      { name: '오시는길', path: '/about/location' },
    ],
  },
  materials: {
    name: '자료실',
    path: '/materials',
    renderInMainNav: true,
    children: [{ name: '교육자료', path: '/materials/education' }],
  },
  community: {
    name: '커뮤니티',
    path: '/community',
    renderInMainNav: true,
    children: [
      { name: '회원동정', path: '/community/news' },
      { name: '자유게시판', path: '/community/forum' },
    ],
  },
  notices: {
    name: '알림마당',
    path: '/notices',
    renderInMainNav: true,
    children: [
      { name: '공지사항', path: '/notices/announcements' },
      { name: 'QnA', path: '/notices/qna' },
    ],
  },
  accounts: {
    name: '회원 서비스',
    path: '/accounts',
    children: [
      { name: '로그인', path: '/accounts/login', requiredLogin: false },
      { name: '회원가입', path: '/accounts/register', requiredLogin: false },
      { name: '마이페이지', path: '/accounts/mypage', requiredLogin: true },
    ],
  },
};
