import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Login from 'components/accounts/ui/Login';

const Wrapper = styled.div`
  padding: 20px;

  h3 {
    font-size: ${(props) => props.theme.fontSize.xxl};
    font-weight: 400;
    margin-bottom: 25px;
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
    color: ${(props) => props.theme.color.blue[2]};
  }
`;

const HomeLogin = () => {
  return (
    <Wrapper>
      <h3>로그인</h3>
      <Login basicMode={true}/>
      <ActionLinks>
        <p>
          <span>회원이 아니신가요?</span>
          <Link to='/accounts/register'>회원가입</Link>
        </p>
        {/* <p>
          <span>회원 정보를 잊으셨나요?</span>
          <Link>정보찾기</Link>
        </p> */}
      </ActionLinks>
    </Wrapper>
  );
};

export default HomeLogin;
