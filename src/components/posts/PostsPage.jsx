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
  text-align: right;
`;

const PostsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathSegments = location.pathname.split('/').filter(Boolean); 
  const searchParams = new URLSearchParams(location.search);
  const category = pathSegments.at(-1);
  const currentPage = parseInt(searchParams.get('page') || '1', 10);

  const PAGE_SIZE = 8;

  const {
    data: { posts, totalPosts, totalPages } = {
      posts: [],
      totalPosts: 0,
      totalPages: 0,
    },
    isSuccess,
  } = useFetchPosts(category, PAGE_SIZE, currentPage);

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
        {isSuccess && <PostList posts={posts} startNumber={startNumber} />}
      </SectionBlock>
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

export default PostsPage;
