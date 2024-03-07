import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import InputField from 'components/common/form/InputField';
import Button from 'components/common/Button';
import FileField from './features/FileField';
import WysiwygField from './features/WysiwygField';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import useApiRequest from 'hooks/common/useApiRequest';
import { queryClient } from 'index';
import getCurrentUser from 'utils/get-current-user';

const BtnsBlock = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 20px;
`;

const EditPostPage = ({ updateMode = false }) => {
  const navigate = useNavigate();
  const { category, postId } = useParams();
  const user = getCurrentUser();
  const { post: oldPost } =
    queryClient.getQueryData([`posts/${postId}`, 'GET']) || {};
    
  const newPost = useApiRequest({ url: `/posts`, method: 'POST' });
  const updatePost = useApiRequest({
    url: `/posts/${postId}`,
    method: 'PATCH',
  });
  const isLoading = newPost.isPending || updatePost.isPending;

  const { register, handleSubmit, control } = useForm({ mode: 'onSubmit' });

  const onSubmit = (data) => {
    if (!data.content) {
      return alert('본문 내용을 입력해주세요.');
    }

    const postData = new FormData();
    postData.append('title', data.title);
    postData.append('content', data.content);
    postData.append('authorName', user.username);
    postData.append('authorId', user._id);
    postData.append('category', category);

    if (data.files && data.files.length > 0) {
      data.files.forEach((file) => {
        postData.append(`files`, file);
      });
    }

    if (updateMode) {
      updatePost.mutate(postData, { onSuccess: () => navigate('..') });
    } else {
      newPost.mutate(postData, { onSuccess: () => navigate('..') });
    }
  };

  if (updateMode && user._id !== oldPost?.authorId) {
    alert('잘못된 접근입니다. 다시 시도해주세요.');
    return <Navigate to={`/posts/${category}`} />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        id="title"
        label="제목"
        registerOption={register('title')}
        required
        minLength={2}
        maxLength={50}
        defaultValue={oldPost?.title || ''}
      />
      <InputField
        label="작성자"
        defaultValue={user.username}
        width="250px"
        readOnly
      />
      <WysiwygField control={control} defaultValue={oldPost?.content || ''} />
      <FileField control={control} defaultValue={oldPost?.files} />
      <BtnsBlock>
        <Button to=".." width="120px" color="gray">
          취소
        </Button>
        <Button width="120px" disabled={isLoading}>
          {isLoading ? '요청중' : '저장'}
        </Button>
      </BtnsBlock>
    </form>
  );
};

export default EditPostPage;
