import Button from 'components/common/Button';
import useApiRequest from 'hooks/common/useApiRequest';
import { Link } from 'react-router-dom';
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &:last-child {
    margin-bottom: 0;
  }

  a {
    max-width: 100%;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
  }

  a:hover {
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
          console.log(post);
          const date = formatDate(post.createdAt);
          return (
            <ListItem key={post._id}>
              <Link to={`/posts/${post.category}/${post._id}`}>
                {post.title}
              </Link>
              <time dateTime={date}>{date}</time>
            </ListItem>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default HomeBoard;
