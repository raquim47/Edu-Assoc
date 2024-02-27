import Button from 'components/common/Button';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BoardList from './ui/BoardList';
import Pagination from './ui/Pagination';
import SearchForm from './ui/SearchForm';

const SectionBlock = styled.section`
  margin-bottom: 20px;
`;

const BtnsSection = styled.section`
  text-align: right;
`

const BoardPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <SectionBlock>
        <SearchForm />
      </SectionBlock>
      <SectionBlock>
        <BoardList />
      </SectionBlock>
      <SectionBlock>
        <Pagination />
      </SectionBlock>
      <BtnsSection>
        <Button width="100px">글쓰기</Button>
      </BtnsSection>
    </>
  );
};

export default BoardPage;
