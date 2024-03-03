import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Button from 'components/common/Button';
import PostList from './features/PostList';
import Pagination from './features/Pagination';
import SearchForm from './features/SearchForm';
import useFetchPosts from 'hooks/posts/useFetchPosts';
import { PAGE_SIZE } from 'utils/constants';

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
  const navigate = useNavigate();
  const { category } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  
  const searchType = searchParams.get('searchType');
  const keyword = searchParams.get('keyword');
  const currentPage = parseInt(searchParams.get('page') || '1', 10);

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
        <PostList posts={posts} startNumber={startNumber} currentPage={currentPage} />
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
          <Button to={`${location.pathname}?page=1`} color="gray" width="100px">
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
