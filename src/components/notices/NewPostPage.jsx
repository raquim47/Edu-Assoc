import { useEffect, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { useForm } from 'react-hook-form';
import NewForm from './ui/NewForm';
import FormBtns from './ui/FormBtns';
import { useNavigate } from 'react-router-dom';
import { useAddPost } from './hooks';
import { useFetchUser } from 'components/accounts/hooks';

const modules = {
  toolbar: [
    [{ font: [] }, { size: [] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ color: [] }, { background: [] }],
    [{ script: 'sub' }, { script: 'super' }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }, { align: [] }],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
};

const NewPostPage = () => {
  const navigate = useNavigate();
  const { user } = useFetchUser();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const [file, setFile] = useState(null);
  const addPost = useAddPost();

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const file = files[0];
      const maxSize = 10 * 1024 * 1024;
      if (file.size > maxSize) {
        return alert('파일 크기는 10MB를 초과할 수 없습니다.');
      }
      setFile(file);
    }
  };

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
      validate: (value) => value !== '<p><br></p>' || '내용을 입력해주세요.',
    });
  }, [register]);

  return (
    <NewForm
      onSubmit={handleSubmit(handleOnSubmit, () =>
        alert('입력사항을 확인하세요')
      )}
    >
      <div className="row">
        <label htmlFor="title">
          <span>제목</span>
        </label>
        <div className="input-field">
          <input
            id="title"
            {...register('title', { required: '제목을 입력해주세요.' })}
          />
          {errors.title && (
            <p className="error-message">{errors.title.message}</p>
          )}
        </div>
      </div>
      <div className="row">
        <label htmlFor="author">
          <span>작성자</span>
        </label>
        <div className="input-field">
          <input
            className="author-input"
            id="author"
            defaultValue={user.username}
            readOnly
          />
        </div>
      </div>
      <div className="row">
        <label htmlFor="contents">
          <span>내용</span>
        </label>
        <div className="input-field quill">
          <ReactQuill
            theme="snow"
            modules={modules}
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
      <FormBtns>
        <button type="button" onClick={() => navigate('..')}>
          취소
        </button>
        <button className="save" type="submit">
          저장
        </button>
      </FormBtns>
    </NewForm>
  );
};

export default NewPostPage;
