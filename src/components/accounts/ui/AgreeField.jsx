import styled from 'styled-components';

const Wrapper = styled.fieldset`
  margin-bottom: 25px;

  legend {
    font-size: ${(props) => props.theme.fontSize.xl};
    font-weight: 400;
    margin-bottom: 15px;
  }

  .check {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  input {
    width: 18px;
    height: 18px;
    margin-top: 5px;
    accent-color: ${(props) => props.theme.color.blue[1]};
    cursor: pointer;
  }

  label {
    cursor: pointer;
  }
`;

const AgreementText = styled.div`
  height: 200px;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.color.gray[1]};
  overflow-y: scroll;
`;

const AgreeField = ({ agreementText, id, label, onChange, ...props }) => {
  return (
    <Wrapper>
      <legend>{label}</legend>
      <AgreementText>{agreementText}</AgreementText>
      <div className="check">
        <input
          type="checkbox"
          id={id}
          onChange={(e) => onChange(e.target.checked)}
          {...props}
        />
        <label htmlFor={id}>{label + '에 동의합니다.'}</label>
      </div>
    </Wrapper>
  );
};

export default AgreeField;
