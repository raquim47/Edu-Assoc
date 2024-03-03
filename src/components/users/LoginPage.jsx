import styled from 'styled-components';
import LoginForm from './features/LoginForm';

const DivBlock = styled.div`
  width: 478px;
`;

const LoginPage = () => {
  return (
    <DivBlock>
      <LoginForm />
    </DivBlock>
  );
};

export default LoginPage;
