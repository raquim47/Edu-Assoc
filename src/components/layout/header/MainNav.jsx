import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import DropMenu from './DropMenu';

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 40px;
  z-index: ${(props) => props.theme.zIndex.header};

  h1 {
    font-size: ${(props) => props.theme.fontSize['3xl']};
    color: ${(props) => props.theme.color.blue[0]};
  }

  .main-list {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 40px;
    border-top: 1px solid ${(props) => props.theme.color.gray[1]};
  }

  .main-list > li {
    position: relative;
  }

  .main-list > li > a {
    display: block;
    padding: 15px 50px;
    font-size: ${(props) => props.theme.fontSize.l};
  }
`;

const DropMenuBg = styled.div`
  position: absolute;
  top: 100%;
  height: ${(props) => (props.$isDropMenuShow ? '200px' : 0)};
  width: 100%;
  transition: height 0.3s ease;
  background-color: rgba(18, 43, 65, 0.85);
`;

const mainMenuItems = [
  {
    name: '협회소개',
    path: '/about',
    subMenus: [
      { name: '인사말', path: '/about/greetings' },
      { name: '연혁', path: '/about/history' },
      { name: '정관', path: '/about/history' },
      { name: '임원진', path: '/about/history' },
    ],
  },
  {
    name: '교육자료',
    path: '/materials',
    subMenus: [{ name: '총회자료', path: '/materials/general' }],
  },
  {
    name: '커뮤니티',
    path: '/community',
    subMenus: [
      { name: '회원 동정', path: '/community/gallery' },
      { name: '게시판', path: '/community/board' },
    ],
  },
  {
    name: '알림마당',
    path: '/notices',
    subMenus: [
      { name: '공지사항', path: '/notices/gallery' },
      { name: '게시판', path: '/notices/board' },
    ],
  },
];

const MainNav = () => {
  const [isDropMenuShow, setIsDropMenuShow] = useState(false);

  const toggleDropMenu = (visible) => () => {
    setTimeout(() => setIsDropMenuShow(visible), 100);
  };

  return (
    <Wrapper
      onMouseLeave={toggleDropMenu(false)}
      onBlur={toggleDropMenu(false)}
    >
      <h1>
        <Link to="/">KSMS 서비스경영학회</Link>
      </h1>
      <ul
        className="main-list"
        onMouseEnter={toggleDropMenu(true)}
        onFocus={toggleDropMenu(true)}
      >
        {mainMenuItems.map((menuItem) => (
          <li key={menuItem.name}>
            <NavLink to={menuItem.path}>{menuItem.name}</NavLink>
            <DropMenu
              subMenus={menuItem.subMenus}
              isDropMenuShow={isDropMenuShow}
            />
          </li>
        ))}
      </ul>
      <DropMenuBg $isDropMenuShow={isDropMenuShow} />
    </Wrapper>
  );
};

export default MainNav;
