import styled from 'styled-components';
import Login from './ui/Login';

const Wrapper = styled.div`
  width: 478px;
`;

const LoginPage = () => {
  return (
    <Wrapper>
      <Login />
    </Wrapper>
  );
};

export default LoginPage;
