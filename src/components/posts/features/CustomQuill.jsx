import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import styled from 'styled-components';

const editorModules = {
  toolbar: [
    [{ font: [] }, { size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'clean'],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
  ],
};

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

const CustomQuill = ({ ...props }) => {
  return <CustomStyledQuill theme="snow" modules={editorModules} {...props} />;
};

export default CustomQuill;
