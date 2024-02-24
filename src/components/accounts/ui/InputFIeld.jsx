import { forwardRef } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border: 1px solid ${(props) => props.theme.color.gray[1]};
  gap: 10px;

  label {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 140px;
    padding: 15px;
    border-right: 1px solid ${(props) => props.theme.color.gray[1]};
    font-size: ${(props) => props.theme.fontSize.s};
    text-align: end;
    background-color: ${(props) => props.theme.color.gray[2]};
  }

  label.basic-mode {
    display: none;
  }

  .required-mark {
    color: ${(props) => props.theme.color.red};
    font-size: ${(props) => props.theme.fontSize.l};
    line-height: 0;
  }

  input {
    width: 315px;
    padding: 10px 10px;
    font-size: 16px;
    outline: none;
    border: 1px solid ${(props) => props.theme.color.gray[1]};
  }

  input.basic-mode {
    border: none;
  }
`;

const ErrorMassage = styled.p`
  position: absolute;
  top: 100%;
  left: ${props => props.$basicMode ? '10px' : '150px'};
  color: ${(props) => props.theme.color.red};
  font-size: ${(props) => props.theme.fontSize.xs};
  white-space: nowrap;
`;

const InputFIeld = forwardRef(
  ({ id, label, isRequired, children, basicMode, error, ...props }, ref) => {
    return (
      <Wrapper>
        <label htmlFor={id} className={basicMode ? 'basic-mode' : ''}>
          {isRequired && <span className="required-mark">*</span>}
          {label}
        </label>
        <input id={id} ref={ref} className={basicMode ? 'basic-mode' : ''} {...props} />
        {children}
        {error && <ErrorMassage $basicMode={basicMode}>{error.message}</ErrorMassage>}
      </Wrapper>
    );
  }
);

export default InputFIeld;
