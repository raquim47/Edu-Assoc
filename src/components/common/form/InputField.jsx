import Label from './Label';
import ErrorMessage from './ErrorMessage';
import { forwardRef } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  border: 1px solid ${(props) => props.theme.color.gray[1]};
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const InputArea = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  padding: 6px;
  gap: 6px;

  input {
    flex: ${(props) => (props.$width ? `0 0 ${props.$width}` : 1)};
    padding: 10px 10px;
    height: 100%;
    font-size: ${(props) => props.theme.fontSize.m};
    border: none;
    border: 1px solid ${(props) => props.theme.color.gray[1]};
  }

  input:read-only {
    background-color: ${(props) => props.theme.color.gray[2]};
    color: ${(props) => props.theme.color.black[2]};
  }

  input.basic-mode {
    border: none;
  }
`;

const InputField = forwardRef(
  (
    { id, width, label, isRequired, children, basicMode, error, ...props },
    ref
  ) => {
    return (
      <Wrapper>
        <Label
          label={label}
          id={id}
          basicMode={basicMode}
          isRequired={isRequired}
        />
        <InputArea $width={width}>
          <input
            id={id}
            ref={ref}
            className={basicMode ? 'basic-mode' : ''}
            {...props}
          />
          {children}
          {error && <ErrorMessage message={error.message} />}
        </InputArea>
      </Wrapper>
    );
  }
);

export default InputField;
