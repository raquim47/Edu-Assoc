import { styled } from 'styled-components';

const FormTemplate = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  fieldset {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  legend {
    font-size: ${(props) => props.theme.fontSize.xl};
    font-weight: 400;
    margin-bottom: 15px;
  }

  .submit-btn {
    padding: 15px 0;
    background-color: ${(props) => props.theme.color.blue[1]};
    color: ${(props) => props.theme.color.white};

    &:disabled {
      background-color: ${(props) => props.theme.color.gray[0]};
      cursor: default;
    }
    &:hover {
      background-color: ${(props) => props.theme.color.blue[2]};
    }
    &:disabled:hover {
      background-color: ${(props) => props.theme.color.gray[0]};
    }
  }
`;

export default FormTemplate;
