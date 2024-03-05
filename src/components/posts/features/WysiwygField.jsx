import styled from 'styled-components';
import Label from 'components/common/form/Label';
import CustomQuill from './CustomQuill';
import { Controller } from 'react-hook-form';

const DivBlock = styled.div`
  display: flex;
  border: 1px solid ${(props) => props.theme.color.gray[1]};
  margin-bottom: 20px;

  .quill-wrap {
    flex: 1;
    display: flex;
  }
`;

const WysiwygField = ({ control, defaultValue }) => {
  return (
    <Controller
      name="content"
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, value } }) => (
        <DivBlock>
          <Label label="내용" />
          <div className="quill-wrap">
            <CustomQuill
              value={value}
              onChange={(content, delta, source, editor) => {
                const isEmptyText = !editor.getText().trim();
                const contentForSubmit = !isEmptyText ? content : '';
                onChange(contentForSubmit);
              }}
              
            />
          </div>
        </DivBlock>
      )}
    />
  );
};

export default WysiwygField;
