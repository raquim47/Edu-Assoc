import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.nav`
  padding: 10px 0;
  background-color: ${props => props.theme.color.blue[0]};

  ul {
    display: flex;
    justify-content: flex-end;
    max-width: 1200px;
    margin: 0 auto;
  }

  li {
    padding: 0 10px;
    font-size:${props => props.theme.fontSize.s};;
    font-weight: 300;
    color: ${props => props.theme.color.white};
  }
`;

const SubNav = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/accounts/login">로그인</Link>
        </li>
        <li>
          <Link to="/accounts/register">회원가입</Link>
        </li>
        <li>
          <Link>사이트맵</Link>
        </li>
      </ul>
    </Wrapper>
  );
};

export default SubNav;
