import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px;

  h3 {
    font-size: ${(props) => props.theme.fontSize.xxl};
    font-weight: 400;
    margin-bottom: 25px;
  }
`;

const Form = styled.form`
  display: block;

  input {
    display: block;
    width: 100%;
    margin-bottom: 10px;
    padding: 20px 12px;
    border: 1px solid ${(props) => props.theme.color.gray[1]};
    color: #414141;
    font-size: ${(props) => props.theme.fontSize.s};
  }

  button {
    width: 100%;
    padding: 15px 0;
    font-size: 16px;
    background-color: ${(props) => props.theme.color.blue[1]};
    color: white;
  }

  button:hover {
    background-color: ${(props) => props.theme.color.blue[2]};
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
    color: ${(props) => props.theme.color.orange};
  }
`;

const HomeLogin = () => {
  return (
    <Wrapper>
      <h3>로그인</h3>
      <Form>
        <input type="text" placeholder="아이디를 입력하세요" />
        <input type="password" placeholder="비밀번호를 입력하세요" />
        <button>로그인</button>
      </Form>
      <ActionLinks>
        <p>
          <span>회원이 아니신가요?</span>
          <Link>회원가입</Link>
        </p>
        <p>
          <span>회원 정보를 잊으셨나요?</span>
          <Link>정보찾기</Link>
        </p>
      </ActionLinks>
    </Wrapper>
  );
};

export default HomeLogin;