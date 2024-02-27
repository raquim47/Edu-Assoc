import { forwardRef } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  border: 1px solid ${(props) => props.theme.color.gray[1]};
`;

const Label = styled.label`
  text-align: right;
  width: 130px;
  padding: 15px;
  border-right: 1px solid ${(props) => props.theme.color.gray[1]};
  font-size: ${(props) => props.theme.fontSize.s};
  text-align: end;
  background-color: ${(props) => props.theme.color.gray[2]};

  .required-mark {
    line-height: 0;
    color: ${(props) => props.theme.color.red};
    font-size: ${(props) => props.theme.fontSize.l};
  }
`;

const InputArea = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  padding: 6px;
  gap: 6px;

  input {
    flex: ${(props) => (props.$inputWidth ? `0 0 ${props.$inputWidth}` : 1)};
    padding: 10px 10px;
    height: 100%;
    font-size: ${(props) => props.theme.fontSize.m};
    border: none;
    border: 1px solid ${(props) => props.theme.color.gray[1]};
  }

  input.basic-mode {
    border: none;
  }
`;

const ErrorMassage = styled.p`
  position: absolute;
  top: calc(100% + 1px);
  left: 8px;
  color: ${(props) => props.theme.color.red};
  font-size: ${(props) => props.theme.fontSize.xs};
  font-weight: 300;
  white-space: nowrap;
`;

const InputFIeld = forwardRef(
  (
    { id, inputWidth, label, isRequired, children, basicMode, error, ...props },
    ref
  ) => {
    return (
      <Wrapper>
        <Label htmlFor={id} className={basicMode ? 'sr-only' : ''}>
          {isRequired && <span className="required-mark">*</span>}
          {label}
        </Label>
        <InputArea $inputWidth={inputWidth}>
          <input
            id={id}
            ref={ref}
            className={basicMode ? 'basic-mode' : ''}
            {...props}
          />
          {children}
          {error && <ErrorMassage>{error.message}</ErrorMassage>}
        </InputArea>
      </Wrapper>
    );
  }
);

export default InputFIeld;
