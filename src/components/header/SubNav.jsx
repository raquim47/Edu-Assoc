import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.nav`
  padding: 10px 0;
  background-color: #122b41;

  ul {
    display: flex;
    justify-content: flex-end;
    max-width: 1200px;
    margin: 0 auto;
  }

  li {
    font-size: 14px;
    font-weight: 300;
    padding: 0 10px;
    color: #fff;
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
          <Link>회원가입</Link>
        </li>
        <li>
          <Link>사이트맵</Link>
        </li>
      </ul>
    </Wrapper>
  );
};

export default SubNav;
