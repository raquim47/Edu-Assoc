import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Login from 'components/accounts/ui/Login';
import { useFetchUser, useLogout } from 'components/accounts/hooks';

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

  button {
    padding: 15px 0;
    background-color: ${(props) => props.theme.color.blue[1]};
    color: ${(props) => props.theme.color.white};

    &:hover {
      background-color: ${(props) => props.theme.color.blue[2]};
    }
  }
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
    color: ${(props) => props.theme.color.blue[3]};
  }
`;

const HomeLogin = () => {
  const { user } = useFetchUser();
  const logout = useLogout();
  const navigate = useNavigate();

  return (
    <Wrapper>
      {user ? (
        <>
          <h3>
            <strong>{user.username}</strong>님 안녕하세요
          </h3>
          <ActionBtns>
            <button onClick={() => navigate('/accounts/mypage')}>마이페이지</button>
            <button onClick={logout}>로그아웃</button>
          </ActionBtns>
        </>
      ) : (
        <>
          <h3>로그인</h3>
          <Login basicMode={true} />
          <ActionLinks>
            <p>
              <span>회원이 아니신가요?</span>
              <Link to="/accounts/register">회원가입</Link>
            </p>
            {/* <p>
            <span>회원 정보를 잊으셨나요?</span>
            <Link>정보찾기</Link>
          </p> */}
          </ActionLinks>
        </>
      )}
    </Wrapper>
  );
};

export default HomeLogin;
