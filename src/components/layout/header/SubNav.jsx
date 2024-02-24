import { useSelector } from 'react-redux';
import { Link, useSubmit } from 'react-router-dom';
import styled from 'styled-components';

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
  const submit = useSubmit();
  const user = useSelector((state) => state.auth.user);

  const handleOnLogout = () => {
    if (window.confirm('로그아웃하시겠습니까?')) {
      submit(null, { action: '/accounts/logout', method: 'post' });
    }
  };
  return (
    <Wrapper>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        {user ? (
          <>
            <li>
              <Link to="/accounts/login">마이페이지</Link>
            </li>
            <li>
              <LogoutBtn onClick={handleOnLogout}>로그아웃</LogoutBtn>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/accounts/login">로그인</Link>
            </li>
            <li>
              <Link to="/accounts/register">회원가입</Link>
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
