import Button from 'components/common/Button';
import Label from 'components/common/form/Label';
import { useState } from 'react';
import styled from 'styled-components';

const DivBlock = styled.div`
  display: flex;
  align-items: center;
  padding-right: 20px;
  border: 1px solid ${(props) => props.theme.color.gray[1]};
`;

const ViewFileInput = styled.input`
  flex: 1;
  padding-left: 20px;
  font-size: ${(props) => props.theme.fontSize.m};
  color: ${(props) => props.theme.color.black[2]};
  border: none;
`;

const FileField = ({ label = '파일', registerOption }) => {
  const [file, setFile] = useState(null);
  
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

  return (
    <DivBlock>
      <Label label={label} />
      <ViewFileInput
        value={file ? file.name : '첨부된 파일이 없습니다.'}
        readOnly
      />
      <input
        id="file"
        type="file"
        className='sr-only'
        {...registerOption}
        onChange={handleFileChange}
      />
      <Button as="label" htmlFor="file" size="m">
        파일 찾기
      </Button>
    </DivBlock>
  );
};

export default FileField;
