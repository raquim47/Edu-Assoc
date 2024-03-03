import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import InputField from 'components/common/form/InputField';
import Button from 'components/common/Button';
import FileField from './features/FileField';
import WysiwygField from './features/WysiwygField';
import useFetchUser from 'hooks/user/useFetchUser';
import useNewPost from 'hooks/posts/useNewPost';
import { useLocation, useNavigate } from 'react-router-dom';

const BtnsBlock = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 20px;
`;

const NewPostPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean); // 공백 제거
  const category = pathSegments.at(-2);

  const {
    data: { user },
  } = useFetchUser();
  const [count, setCount] = useState(0);
  const newPost = useNewPost();
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' });

  const onSubmit = (data) => {
    if (!data.content) {
      alert('본문 내용을 입력해주세요.');
      return;
    }

    const postData = new FormData();
    postData.append('title', data.title);
    postData.append('content', data.content);
    postData.append('authorName', user.username);
    postData.append('authorId', user._id);
    postData.append('category', category);

    if (data.file?.length > 0) {
      postData.append('file', data.file[0]);
    }
    newPost.mutate(postData, { onSuccess: () => navigate('..') });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <button
        onClick={() => {
          newPost.mutate({
            title: `테스트 제목 ${count}`,
            content: `<p>테스트 내용 ${count}<p>`,
            author: user.username,
            authorId: user.uid,
            category,
          });
          setCount((p) => p + 1);
        }}
        type="button"
      >
        dummy
      </button> */}
      <InputField
        id="title"
        label="제목"
        registerOption={register('title')}
        required
        minLength={2}
        maxLength={24}
      />
      <InputField
        label="작성자"
        defaultValue={user.username}
        width="250px"
        readOnly
      />
      <WysiwygField
        id="content"
        setValue={setValue}
        clearErrors={clearErrors}
        error={errors['content']}
      />
      <FileField label="파일업로드 [10MB]" registerOption={register('file')} />
      <BtnsBlock>
        <Button to=".." width="120px" color="gray">
          취소
        </Button>
        <Button width="120px" disabled={newPost.isPending}>
          {newPost.isPending ? '요청중' : '저장'}
        </Button>
      </BtnsBlock>
    </form>
  );
};

export default NewPostPage;
