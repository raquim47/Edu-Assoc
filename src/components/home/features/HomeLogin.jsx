import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LoginForm from 'components/users/features/LoginForm';
import Button from 'components/common/Button';
import useFetchUser from 'hooks/user/useFetchUser';
import useLogout from 'hooks/user/useLogout';

const Wrapper = styled.div`
  padding: 20px;

  h3 {
    font-size: ${(props) => props.theme.fontSize.xxl};
    font-weight: 400;
    margin-bottom: 25px;
  }

  h3 > strong {
    color: ${(props) => props.theme.color.blue[2]};
  }
`;

const ActionBtns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ActionLinks = styled.div`
  p {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    font-size: ${(props) => props.theme.fontSize.s};
    font-weight: 300;
    color: ${(props) => props.theme.color.black[1]};
  }

  a {
    color: ${(props) => props.theme.color.blue[2]};
  }
`;

const HomeLogin = () => {
  const {
    data: { user },
  } = useFetchUser();
  const logout = useLogout();

  return (
    <Wrapper>
      {user ? (
        <>
          <h3>
            <strong>{user.username}</strong>님 안녕하세요
          </h3>
          <ActionBtns>
            <Button to="/mypage">마이페이지</Button>
            <Button onClick={logout}>로그아웃</Button>
          </ActionBtns>
        </>
      ) : (
        <>
          <h3>로그인</h3>
          <LoginForm miniMode />
          <ActionLinks>
            <p>
              <span>회원이 아니신가요?</span>
              <Link to="/signup">회원가입</Link>
            </p>
          </ActionLinks>
        </>
      )}
    </Wrapper>
  );
};

export default HomeLogin;
