import styled from 'styled-components';
import Fieldset from './Fieldset';

const AgreementText = styled.div`
  height: 200px;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.color.gray[1]};
  color: ${(props) => props.theme.color.black[1]};
  font-size: ${(props) => props.theme.fontSize.s};
  background-color: ${(props) => props.theme.color.gray[3]};
  overflow-y: scroll;
`;

const CheckBoxField = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  input {
    width: 18px;
    height: 18px;
    margin-top: 5px;
    accent-color: ${(props) => props.theme.color.blue[2]};
    cursor: pointer;
  }

  label {
    color: ${(props) => props.theme.color.black[1]};
    font-size: ${(props) => props.theme.fontSize.s};
    cursor: pointer;
  }
`;

const AgreeField = ({ content, id, label, onChange, ...props }) => {
  return (
    <Fieldset legend={label}>
      <AgreementText>{content}</AgreementText>
      <CheckBoxField>
        <input
          type="checkbox"
          id={id}
          onChange={(e) => onChange(e.target.checked)}
          {...props}
        />
        <label htmlFor={id}>{label + '에 동의합니다.'}</label>
      </CheckBoxField>
    </Fieldset>
  );
};

export default AgreeField;
