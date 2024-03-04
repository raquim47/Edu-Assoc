import styled from 'styled-components';
import fileIcon from 'assets/file-icon.png';
import Button from 'components/common/Button';
import { useLocation, useParams } from 'react-router-dom';
import { formatDate, formatHtml } from 'utils/format';
import { useEffect } from 'react';
import useScrollToTop from 'hooks/common/useScrollTop';
import useApiRequest from 'hooks/common/useApiRequest';

const HeaderBlock = styled.div`
  border-top: 1px solid ${(props) => props.theme.color.gray[1]};
  border-bottom: 1px solid ${(props) => props.theme.color.gray[1]};
  padding: 15px 10px;

  h3 {
    color: ${(props) => props.theme.color.black[1]};
    font-size: ${(props) => props.theme.fontSize.xl};
    font-weight: 400;
  }
`;

const PostInfo = styled.ul`
  margin-top: 14px;
  display: flex;
  gap: 25px;
  font-size: 14px;
  color: ${(props) => props.theme.color.gray[0]};
  font-weight: 400;

  strong {
    color: ${(props) => props.theme.color.black[1]};
    margin-right: 10px;
    font-weight: 400;
  }
`;

const ContentBlock = styled.div`
  padding: 30px 10px;
  color: ${(props) => props.theme.color.black[1]};
  border-bottom: 1px solid ${(props) => props.theme.color.black[2]};

  .file {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-top: 30px;
    padding: 10px 0;
    background-color: ${(props) => props.theme.color.gray[3]};
    border-top: 1px solid ${(props) => props.theme.color.gray[2]};
    border-bottom: 1px solid ${(props) => props.theme.color.gray[2]};

    img {
      width: 36px;
    }

    a {
      width: 80%;
      color: ${(props) => props.theme.color.blue[2]};
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const ActionBlock = styled.div`
  padding: 20px 0;
  a {
    display: block;
    margin-left: auto;
    margin-right: 0;
  }
`;

const PostDetailPage = () => {
  const { postId } = useParams();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const beforePage = queryParams.get('beforePage');

  const {
    data: { post } = { post: {} },
    isSuccess,
    refetch,
  } = useApiRequest({ url: `posts/${postId}`, gcTime: 60000 });
  const countPostViews = useApiRequest({
    url: `/posts/${postId}/views`,
    method: 'POST',
  });

  useScrollToTop();

  useEffect(() => {
    if (!isSuccess) return;

    const viewedPosts = localStorage.getItem('viewedPosts')
      ? JSON.parse(localStorage.getItem('viewedPosts'))
      : {};
    const now = new Date().getTime();
    const oneDay = 24 * 60 * 60 * 1000;

    if (
      postId &&
      (!viewedPosts[postId] || now - viewedPosts[postId] > oneDay)
    ) {
      countPostViews.mutate(postId, {
        onSuccess: () => {
          refetch();
          viewedPosts[postId] = now;
          localStorage.setItem('viewedPosts', JSON.stringify(viewedPosts));
        },
      });
    }
  }, [postId, isSuccess]);

  return (
    <>
      <HeaderBlock>
        <h3>{post.title}</h3>
        <PostInfo>
          <li>
            <strong>작성자</strong>
            {post.authorName}
          </li>
          <li>
            <strong>작성일</strong>
            {formatDate(post.createdAt)}
          </li>
          <li>
            <strong>조회수</strong>
            {post.views}
          </li>
        </PostInfo>
      </HeaderBlock>
      <ContentBlock>
        {formatHtml(post.content)}
        {post.file && (
          <div className="file">
            <img src={fileIcon} alt="file" />
            <a href={post.file.url} download={post.file.originalName}>
              {post.file.originalName}
            </a>
          </div>
        )}
      </ContentBlock>
      <ActionBlock>
        <Button to={`../?page=${beforePage || 1}`} color="gray" width="100px">
          목록
        </Button>
      </ActionBlock>
    </>
  );
};

export default PostDetailPage;
