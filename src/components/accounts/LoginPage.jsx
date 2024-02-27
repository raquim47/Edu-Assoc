import styled from 'styled-components';
import { useLogin } from './hooks';
import LoginForm from './ui/LoginForm';
import Button from 'components/common/Button';

const Wrapper = styled.div`
  width: 478px;
`;

const LoginPage = () => {
  const login = useLogin();
  const handleOnSubmit = (data) => {
    login.mutate(data);
  };
  return (
    <Wrapper>
      <LoginForm onSubmit={handleOnSubmit}>
        <Button theme="blue" type="submit" disabled={login.isPending}>
          {login.isPending ? '요청중' : '로그인'}
        </Button>
      </LoginForm>
    </Wrapper>
  );
};

export default LoginPage;
