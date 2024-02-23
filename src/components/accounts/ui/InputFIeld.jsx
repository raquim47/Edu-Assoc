import { forwardRef } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border: 1px solid ${(props) => props.theme.color.gray[1]};
  gap: 5px;

  label {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 150px;
    padding: 15px;
    border-right: 1px solid ${(props) => props.theme.color.gray[1]};
    font-size: ${(props) => props.theme.fontSize.s};
    text-align: end;
    background-color: ${(props) => props.theme.color.gray[2]};
  }

  .required-mark {
    color: ${(props) => props.theme.color.red};
    font-size: ${(props) => props.theme.fontSize.l};
    line-height: 0;
  }

  input {
    width: 300px;
    padding: 10px 10px;
    font-size: 16px;
    outline: none;
    border: 1px solid ${(props) => props.theme.color.gray[1]};
  }
`;

const ErrorMassage = styled.p`
  position: absolute;
  top: 100%;
  left: 160px;
  color: ${(props) => props.theme.color.red};
  font-size: ${(props) => props.theme.fontSize.xs};
  white-space: nowrap;
`;

const InputFIeld = forwardRef(
  ({ id, label, isRequired, children, error, ...props }, ref) => {
    return (
      <Wrapper>
        <label htmlFor={id}>
          {isRequired && <span className="required-mark">*</span>}
          {label}
        </label>
        <input id={id} ref={ref} {...props} />
        {children}
        {error && <ErrorMassage>{error.message}</ErrorMassage>}
      </Wrapper>
    );
  }
);

export default InputFIeld;