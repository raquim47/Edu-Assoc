import styled from 'styled-components';
import { Controller } from 'react-hook-form';
import Button from 'components/common/Button';
import Label from 'components/common/form/Label';
import { useState } from 'react';

const DivBlock = styled.div`
  display: flex;
  align-items: center;
  padding-right: 20px;
  border: 1px solid ${(props) => props.theme.color.gray[1]};

  label:first-child {
    align-self: stretch;
  }
`;

const ViewFile = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;

  p {
    color: ${(props) => props.theme.color.black[1]};
  }

  button {
    flex-shrink: 0;
    margin-top: 4px;
    margin-left: 10px;
    border: 1px solid ${(props) => props.theme.color.gray[1]};
    background-color: ${(props) => props.theme.color.gray[2]};
    border-radius: 4px;
    color: ${(props) => props.theme.color.black[2]};
    font-size: ${(props) => props.theme.fontSize.xs};
  }
`;

const FileField = ({ control, defaultValue = [] }) => {
  const [files, setFiles] = useState(defaultValue);

  const handleFileChange = (onChange) => (event) => {
    const newFile = event.target.files[0];
    if (!newFile) return;

    const maxSize = 10 * 1024 * 1024;
    if (newFile.size > maxSize) {
      return alert('파일 크기는 10MB를 초과할 수 없습니다.');
    }

    if (files.length >= 2) {
      alert('파일은 최대 2개까지만 첨부할 수 있습니다.');
      return;
    }

    const updatedFiles = [...files, newFile];
    setFiles(updatedFiles);
    onChange(updatedFiles);
  };

  const handleRemoveFile = (index, onChange) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    onChange(updatedFiles);
  };

  return (
    <Controller
      name={'files'}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <DivBlock>
          <Label label={'파일업로드 [10MB]'} />
          <ViewFile>
            {files.map((file, index) => (
              <p key={index}>
                {file.name}
                <button
                  type="button"
                  onClick={() => handleRemoveFile(index, onChange)}
                >
                  삭제
                </button>
              </p>
            ))}
            {!files[0] && <p>첨부된 파일이 없습니다.</p>}
          </ViewFile>
          <input
            id="files"
            type="file"
            className="sr-only"
            onChange={handleFileChange(onChange)}
          />
          <Button as="label" htmlFor="files" size="m">
            파일 찾기
          </Button>
        </DivBlock>
      )}
    />
  );
};

export default FileField;
