import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useFetchUser } from 'components/accounts/hooks';
import InputField from 'components/common/form/InputField';
import Button from 'components/common/Button';
import FileField from './ui/FileField';
import WysiwygField from './ui/WysiwygField';
import { useAddPost } from './hooks';

const BtnsBlock = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 20px;
`;

const NewBoard = () => {
  const { data: user } = useFetchUser();
  const addPost = useAddPost();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' });

  const onSubmit = (data) => {
    const content = watch('content');
    if (!content) {
      setError('content', { message: '내용을 작성해주세요' });
      alert('내용을 입력해주세요.');
      return;
    }
    
    const fileData = data.file && data.file.length > 0 ? data.file[0] : null;
    const postData = {
      title: data.title,
      content: data.content,
      author: user.username,
      authorId: user.uid,
      file: fileData,
    };
    addPost.mutate(postData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
        <Button width="120px" disabled={addPost.isPending}>
          {addPost.isPending ? '요청중' : '저장'}
        </Button>
      </BtnsBlock>
    </form>
  );
};

export default NewBoard;
