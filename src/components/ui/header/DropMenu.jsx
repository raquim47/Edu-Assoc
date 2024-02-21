import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.ul`
  position: absolute;
  top: 100%;
  width: 100%;
  height: ${(props) => (props.$isDropMenuShow ? 'auto' : 0)};
  padding-top: 15px;
  opacity: ${(props) => (props.$isDropMenuShow ? 1 : 0)};
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
  z-index: 10;

  li {
    text-align: center;
    font-size: 15px;
    color: white;
  }

  li a {
    display: block;
    padding: 10px 15px;
  }

  li a:hover {
    color: #004071;
  }
`;

const DropMenu = ({ subMenus, isDropMenuShow }) => {
  return (
    <Wrapper $isDropMenuShow={isDropMenuShow}>
      {subMenus.map((subMenuItem) => (
        <li key={subMenuItem.name}>
          <Link to={subMenuItem.path}>{subMenuItem.name}</Link>
        </li>
      ))}
    </Wrapper>
  );
};

export default DropMenu;
