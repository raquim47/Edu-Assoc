import { useEffect, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAddPost } from './hooks';
import { useFetchUser } from 'components/accounts/hooks';
import NewForm from './ui/NewForm';
import BoardBtns from './ui/BoardBtns';
import { editorModules } from './utils';
import InputField from 'components/common/form/InputField';

const NewPostPage = () => {
  const navigate = useNavigate();
  const { data: { user } } = useFetchUser();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' });
  
  const addPost = useAddPost();

 

  const editorContent = watch('content');

  const handleQuillChange = (content) => {
    setValue('content', content, { shouldValidate: true });
  };

  const handleOnSubmit = async (data) => {
    addPost.mutate(
      {
        ...data,
        author: user.username,
        authorId: user.uid,
        content: editorContent,
        file,
      },
      {
        onSuccess: () => {
          alert('게시글이 성공적으로 등록되었습니다.');
          navigate('..');
        },
        onError: (error) => {
          console.error('Error saving the post: ', error);
          alert('게시글 등록 중 문제가 발생했습니다.');
        },
      }
    );
  };

  useEffect(() => {
    register('content', {
      // getText()
      validate: (value) => value !== '<p><br></p>' || '내용을 입력해주세요.',
    });
  }, [register]);

  return (
    <NewForm onSubmit={handleSubmit(handleOnSubmit)}>
      <InputField id="title" label="제목"/>
      <InputField id="title" label="작성자" inputWidth="300px" readOnly defaultValue="awfwef"/>
      <div className="row">
        <label htmlFor="contents">
          <span>내용</span>
        </label>
        <div className="input-field quill">
          <ReactQuill
            theme="snow"
            modules={editorModules}
            value={editorContent}
            onChange={handleQuillChange}
          ></ReactQuill>
          {errors.content && (
            <p className="error-message">내용을 입력해주세요.</p>
          )}
        </div>
      </div>
      <div className="row">
        <label>
          <span>파일업로드 [10MB]</span>
        </label>
        <div className="input-field">
          <input
            className="upload-name"
            value={file ? file.name : '첨부파일'}
            readOnly
            placeholder="첨부파일"
          />
          <input
            id="file"
            type="file"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <label htmlFor="file" className="file-label">
            파일 찾기
          </label>
        </div>
      </div>
      <BoardBtns />
    </NewForm>
  );
};

export default NewPostPage;
