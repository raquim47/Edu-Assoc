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

const WysiwygField = ({ id, setValue, miniMode }) => {
  const quillRef = useRef();

  const handleQuillChange = (htmlText) => {
    const isEmpty = !quillRef.current.unprivilegedEditor.getText().trim();
    const content = !isEmpty ? htmlText : '';
    setValue(id, !isEmpty ? content : '', { shouldValidate: true });
  };

  return (
    <DivBlock>
      <Label label="내용" className={miniMode ? 'sr-only' : ''} />
      <div className="quill-wrap">
        <CustomStyledQuill
          theme="snow"
          modules={editorModules}
          onChange={handleQuillChange}
          ref={quillRef}
        />
      </div>
    </DivBlock>
  );
};

export default WysiwygField;
