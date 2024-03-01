import { useState } from 'react';
import styled from 'styled-components';
import Button from 'components/common/Button';
import { useFetchPosts } from './hooks';
import BoardList from './ui/BoardList';
import Pagination from './ui/Pagination';
import SearchForm from './ui/SearchForm';

const SectionBlock = styled.section`
  margin-bottom: 20px;
`;

const BtnsSection = styled.section`
  text-align: right;
`;

const BoardPage = () => {
  const PAGE_SIZE = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: { posts, totalPosts } = { posts: [], totalPosts: 0 },
    isSuccess,
  } = useFetchPosts(currentPage, PAGE_SIZE);

  const totalPages = Math.ceil(totalPosts / PAGE_SIZE);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const startNumber = totalPosts - ((currentPage - 1) * PAGE_SIZE);
  return (
    <>
      <SectionBlock>
        <SearchForm />
      </SectionBlock>
      <SectionBlock>{isSuccess && <BoardList posts={posts} startNumber={startNumber} />}</SectionBlock>
      <SectionBlock>
        {isSuccess && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </SectionBlock>
      <BtnsSection>
        <Button to="new" width="100px">
          글쓰기
        </Button>
      </BtnsSection>
    </>
  );
};

export default BoardPage;
