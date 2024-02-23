import { forwardRef } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .check {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  input {
    width: 18px;
    height: 18px;
    margin-top: 5px;
    accent-color: ${props => props.theme.color.blue[1]};
    cursor: pointer;
  }
  
  label {
    cursor: pointer;
  }
`;

const AgreementText = styled.div`
  height: 200px;
  overflow-y: scroll;
  border: 1px solid ${(props) => props.theme.color.gray[1]};
  margin-bottom: 10px;
  padding: 10px;
`;

const AgreementCheckBox = forwardRef(({ agreementText, id, label, ...props }, ref) => {
  return (
    <Wrapper>
      <AgreementText>{agreementText}</AgreementText>
      <div className="check">
        <input ref={ref} type="checkbox" id={id} {...props} />
        <label htmlFor={id}>{label}</label>
      </div>
    </Wrapper>
  );
});

export default AgreementCheckBox;