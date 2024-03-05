import useLogout from 'hooks/user/useLogout';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import getCurrentUser from 'utils/get-current-user';

const Wrapper = styled.nav`
  padding: 10px 0;
  background-color: ${(props) => props.theme.color.blue[0]};

  ul {
    display: flex;
    justify-content: flex-end;
    max-width: 1200px;
    margin: 0 auto;
  }

  li {
    padding: 0 10px;
    font-size: ${(props) => props.theme.fontSize.s};
    font-weight: 300;
    color: ${(props) => props.theme.color.white};
  }
`;

const LogoutBtn = styled.button`
  color: inherit;
  font-weight: 300;
  border: none;
  padding: 0;
`;

const SubNav = () => {
  const user = getCurrentUser();
  const logout = useLogout();
  return (
    <Wrapper>
      <ul>
        <li>
          <Link to="/home">홈</Link>
        </li>
        {user ? (
          <>
            <li>
              <Link to="/mypage">마이페이지</Link>
            </li>
            <li>
              <LogoutBtn onClick={logout}>로그아웃</LogoutBtn>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">로그인</Link>
            </li>
            <li>
              <Link to="/signup">회원가입</Link>
            </li>
          </>
        )}
        <li>
          <Link>사이트맵</Link>
        </li>
      </ul>
    </Wrapper>
  );
};

export default SubNav;
