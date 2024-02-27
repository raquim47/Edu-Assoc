import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

const WysiwygField = () => {
  return (
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
        {<p className="error-message">내용을 입력해주세요.</p>}
      </div>
    </div>
  );
};

export default WysiwygField;
