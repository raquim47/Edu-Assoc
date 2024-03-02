import styled from 'styled-components';
import Button from 'components/common/Button';
import PostList from './ui/PostList';
import Pagination from './ui/Pagination';
import SearchForm from './ui/SearchForm';
import { useLocation, useNavigate } from 'react-router-dom';
import useFetchPosts from 'hooks/posts/useFetchPosts';

const SectionBlock = styled.section`
  margin-bottom: 20px;
`;

const BtnsSection = styled.section`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-top: 30px;
`;

const PostsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const searchParams = new URLSearchParams(location.search);
  const category = pathSegments.at(-1);
  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const PAGE_SIZE = 8;

  const searchType = searchParams.get('searchType');
  const keyword = searchParams.get('keyword');

  const {
    data: { posts, totalPosts, totalPages } = {
      posts: [],
      totalPosts: 0,
      totalPages: 0,
    },
  } = useFetchPosts(category, PAGE_SIZE, currentPage, searchType, keyword);

  const handlePageChange = (newPage) => {
    navigate(`?page=${newPage}`);
  };

  const startNumber = totalPosts - (currentPage - 1) * PAGE_SIZE;

  return (
    <>
      <SectionBlock>
        <SearchForm />
      </SectionBlock>
      <SectionBlock>
        <PostList posts={posts} startNumber={startNumber} />
      </SectionBlock>
      <SectionBlock>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </SectionBlock>
      <BtnsSection>
        {searchType && keyword && (
          <Button
            to={`${location.pathname}?page=1`}
            color="gray"
            width="100px"
          >
            전체 목록
          </Button>
        )}
        <Button to="new" width="100px">
          글쓰기
        </Button>
      </BtnsSection>
    </>
  );
};

export default PostsPage;
