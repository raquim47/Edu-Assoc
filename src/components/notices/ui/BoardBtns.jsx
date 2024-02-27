import Button from 'components/common/Button';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;
  padding: 20px 0;
  background-color: ${(props) => props.theme.color.gray[2]};
`;

const BoardBtns = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Button
        color="gray"
        width="110px"
        type="button"
        onClick={() => navigate('..')}
      >
        취소
      </Button>
      <Button color="blue" width="110px" type="submit">
        저장
      </Button>
    </Wrapper>
  );
};

export default BoardBtns;
