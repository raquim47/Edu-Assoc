import styled from 'styled-components';
import fileIcon from 'assets/file-icon.png';
import Button from 'components/common/Button';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { formatDate, formatHtml } from 'utils/format';
import { useEffect } from 'react';
import useApiRequest from 'hooks/common/useApiRequest';
import getCurrentUser from 'utils/get-current-user';

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
  padding: 30px 10px 50px;
  color: ${(props) => props.theme.color.black[1]};
  border-bottom: 1px solid ${(props) => props.theme.color.gray[1]};
`;

const FilesBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 50px;

  .file {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 10px;
    background-color: ${(props) => props.theme.color.gray[3]};
    border-top: 1px solid ${(props) => props.theme.color.gray[2]};
    border-bottom: 1px solid ${(props) => props.theme.color.gray[2]};

    img {
      width: 36px;
    }

    a {
      word-break: break-all;
      color: ${(props) => props.theme.color.blue[2]};
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const ActionBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  .edit {
    display: flex;
    gap: 10px;
    align-items: flex-start;
  }
`;

const PostDetailPage = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const beforePage = queryParams.get('beforePage');
  const user = getCurrentUser();

  const {
    data: { post } = { post: {} },
    isSuccess,
    refetch,
  } = useApiRequest({ url: `posts/${postId}`, gcTime: 60000 });

  const countPostViews = useApiRequest({
    url: `/posts/${postId}/views`,
    method: 'PATCH',
  });

  const deletePost = useApiRequest({
    url: `/posts/${postId}`,
    method: 'DELETE',
  });

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

  const handlePostDelete = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      deletePost.mutate(null, {
        onSuccess: () => {
          navigate('..');
        },
      });
    }
  };

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
        <FilesBlock>
          {post?.files?.length > 0 &&
            post.files.map((file) => (
              <div className="file" key={file._id}>
                <img src={fileIcon} alt="file" />
                <a href={file.url} download={file.name}>
                  {file.name}
                </a>
              </div>
            ))}
        </FilesBlock>
      </ContentBlock>
      <ActionBlock>
        <Button
          size="s"
          to={`../?page=${beforePage || 1}`}
          color="gray"
          width="100px"
        >
          목록
        </Button>
        {user && user._id === post.authorId && (
          <div className="edit">
            {!deletePost.isPending && (
              <Button to="update" size="s" width="65px">
                수정
              </Button>
            )}
            <Button
              onClick={handlePostDelete}
              size="s"
              width="65px"
              disabled={deletePost.isPending}
            >
              삭제
            </Button>
          </div>
        )}
      </ActionBlock>
    </>
  );
};

export default PostDetailPage;
