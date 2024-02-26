import { useEffect, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { useForm } from 'react-hook-form';
import NewForm from './ui/NewForm';
import FormBtns from './ui/FormBtns';
import { useNavigate } from 'react-router-dom';

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
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const [file, setFile] = useState(null);
  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      setFile(files[0]);
    }
  };

  const editorContent = watch('content');

  const handleQuillChange = (content) => {
    setValue('content', content, { shouldValidate: true });
  };

  const handleOnSubmit = (data) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('author', data.author);
    formData.append('content', data.content);
    if (file) {
      formData.append('file', file);
    }

    console.log([...formData]);
  };

  useEffect(() => {
    register('content', {
      validate: value => value !== '<p><br></p>' || '내용을 입력해주세요.'
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
            type="text"
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
            {...register('author')}
            className="author-input"
            id="author"
            type="text"
            defaultValue="관리자"
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
