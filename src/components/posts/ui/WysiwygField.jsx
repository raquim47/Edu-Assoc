import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import styled from 'styled-components';
import Label from 'components/common/form/Label';
import { useRef } from 'react';

export const editorModules = {
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

const DivBlock = styled.div`
  display: flex;
  border: 1px solid ${(props) => props.theme.color.gray[1]};
  margin-bottom: 20px;

  .quill-wrap {
    flex: 1;
    display: flex;
    position: relative;
  }

  .error {
    position: absolute;
    top: 55%;
    transform: translateY(-50%);
    margin-left: 24px;
    font-size: ${(props) => props.theme.fontSize.xxl};
    color: ${(props) => props.theme.color.gray[1]};
    pointer-events: none;
  }
`;

const CustomStyledQuill = styled(ReactQuill)`
  .ql-toolbar.ql-snow {
    border: none;
    border-bottom: 1px solid #ddd;
  }

  .ql-container.ql-snow {
    height: auto;
    border: none;
  }

  .ql-editor {
    height: 300px;
    font-size: 16px;
    overflow-y: scroll;
    word-break: break-all;
  }

  .ql-formats {
    margin-bottom: 5px;
  }
`;

const WysiwygField = ({ id, setValue, clearErrors, basicMode, error }) => {
  const quillRef = useRef();

  const handleQuillChange = (htmlText) => {
    const isEmpty = !quillRef.current.unprivilegedEditor.getText().trim();
    const content = !isEmpty ? htmlText : '';
    setValue(id, !isEmpty ? content : '', { shouldValidate: true });

    if (error && !isEmpty) {
      clearErrors('content');
    }
  };

  return (
    <DivBlock>
      <Label label="내용" className={basicMode ? 'sr-only' : ''} />
      <div className="quill-wrap">
        <CustomStyledQuill
          theme="snow"
          modules={editorModules}
          onChange={handleQuillChange}
          ref={quillRef}
        />
        {error && <p className="error">{error.message}</p>}
      </div>
    </DivBlock>
  );
};

export default WysiwygField;
