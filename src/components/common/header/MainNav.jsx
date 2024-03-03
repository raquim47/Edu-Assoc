import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NAVIGATION_DATA } from 'utils/constants';
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
    padding: 10px 50px;
    font-size: ${(props) => props.theme.fontSize.l};
  }
`;

const DropMenuBg = styled.div`
  position: absolute;
  top: 100%;
  height: ${(props) => (props.$isDropMenuShow ? '210px' : 0)};
  width: 100%;
  transition: height 0.3s ease;
  background-color: rgba(18, 43, 65, 0.85);
`;

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
        {Object.values(NAVIGATION_DATA)
          .filter((menuItem) => menuItem.renderInMainNav)
          .map((menuItem) => (
            <li key={menuItem.name}>
              <Link to={menuItem.children[0].path}>{menuItem.name}</Link>
              <DropMenu
                subMenus={menuItem.children}
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
