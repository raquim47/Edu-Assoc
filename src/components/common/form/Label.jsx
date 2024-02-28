import styled from 'styled-components';

const LabelBlock = styled.label`
  text-align: right;
  width: 130px;
  padding: 15px;
  border-right: 1px solid ${(props) => props.theme.color.gray[1]};
  font-size: ${(props) => props.theme.fontSize.s};
  text-align: end;
  color: ${(props) => props.theme.color.black[2]};
  background-color: ${(props) => props.theme.color.gray[2]};

  .required-mark {
    line-height: 0;
    color: ${(props) => props.theme.color.red};
    font-size: ${(props) => props.theme.fontSize.l};
  }
`;

const Label = ({ label, id, basicMode, isRequired }) => {
  return (
    <LabelBlock htmlFor={id} className={basicMode ? 'sr-only' : ''}>
      {isRequired && <span className="required-mark">*</span>}
      {label}
    </LabelBlock>
  );
};

export default Label;
