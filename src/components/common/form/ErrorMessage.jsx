import styled from "styled-components";

const Wrapper = styled.p`
  position: absolute;
  top: calc(100% + 1px);
  left: 8px;
  color: ${(props) => props.theme.color.red};
  font-size: ${(props) => props.theme.fontSize.xs};
  font-weight: 300;
  white-space: nowrap;
`;

const ErrorMessage = ({ message }) => {
  return <Wrapper>{message}</Wrapper>;
};

export default ErrorMessage;
