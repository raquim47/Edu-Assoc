import { styled } from 'styled-components';

const Wrapper = styled.fieldset`
  margin-bottom: 20px;

  legend {
    font-size: ${(props) => props.theme.fontSize.xl};
    font-weight: 400;
    margin-bottom: 20px;
  }
`;

const Fieldset = ({ legend, children }) => {
  return (
    <Wrapper>
      {legend && <legend>{legend}</legend>}
      {children}
    </Wrapper>
  );
};

export default Fieldset;
