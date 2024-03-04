import Button from 'components/common/Button';
import useApiRequest from 'hooks/common/useApiRequest';
import styled from 'styled-components';
import { formatDate } from 'utils/format';

const Wrapper = styled.article`
  padding: 20px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 25px;
  }

  h3 {
    font-size: ${(props) => props.theme.fontSize.xxl};
    font-weight: 400;
  }

  ul {
    padding-right: 15px;
  }
`;

const ListItem = styled.li`
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }

  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
  }

  p:hover {
    text-decoration: underline;
  }

  time {
    color: ${(props) => props.theme.color.gray[0]};
    font-size: ${(props) => props.theme.fontSize.s};
    font-weight: 300;
  }
`;

const HomeBoard = ({ title, category }) => {
  const { data: { posts } = { posts: [] } } = useApiRequest({
    url: `/posts/?category=${category}`,
  });
  return (
    <Wrapper>
      <header>
        <h3>{title}</h3>
        <Button to={`/posts/${category}`} size="s" color="white">
          더보기
        </Button>
      </header>
      <ul>
        {posts.map((post) => {
          const date = formatDate(post.createdAt);
          return (
            <ListItem key={post._id}>
              <p>{post.title}</p>
              <time dateTime={date}>{date}</time>
            </ListItem>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default HomeBoard;
