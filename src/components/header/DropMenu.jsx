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
`;

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 6px 15px;
  position: relative;
  overflow: hidden;
  /* border: 1px solid red; */

  &::before {
    content: '';
    display: block;
    position: absolute;
    bottom: 4px;
    left: 50%;
    width: 0;
    height: 1px;
    transform: translateX(-50%);
    background: rgba(255, 255, 255, 0.8);
    transition: width 0.2s ease;
  }
  
  &:hover::before,
  &:focus::before {
    width: 80%;
  }
`;

const DropMenu = ({ subMenus, isDropMenuShow }) => {
  return (
    <Wrapper $isDropMenuShow={isDropMenuShow}>
      {subMenus.map((subMenuItem) => (
        <li key={subMenuItem.name}>
          <StyledLink to={subMenuItem.path}>{subMenuItem.name}</StyledLink>
        </li>
      ))}
    </Wrapper>
  );
};

export default DropMenu;
