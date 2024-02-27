import { styled } from 'styled-components';

const FormTemplate = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  fieldset {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  legend {
    font-size: ${(props) => props.theme.fontSize.xl};
    font-weight: 400;
    margin-bottom: 15px;
  }
`;

export default FormTemplate;
