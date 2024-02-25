import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${props => props.theme.color.gray[2]};
`;

const ErrorMessage = styled.h1`
  font-size: ${props => props.theme.fontSize['4xl']};
  color: ${props => props.theme.color.blue[0]};
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: ${props => props.theme.fontSize.m};
  color: ${props => props.theme.color.white};
  background: ${props => props.theme.color.blue[2]};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: ${props => props.theme.color.blue[1]};
  }
`;

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <ErrorMessage>404 : 페이지를 찾을 수 없습니다</ErrorMessage>
      <Button onClick={() => navigate('/')}>메인으로 돌아가기</Button>
    </Wrapper>
  );
};

export default ErrorPage;