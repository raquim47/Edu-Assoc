import styled from 'styled-components';

const Btn = styled.button`
  padding: ${(props) => props.$size};
  font-size: ${(props) => props.$fontSize};
  border: 1px solid ${(props) => props.theme.color.gray[1]};
  transition: all 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.color.white};
    background-color: ${(props) => props.theme.color.blue[2]};
  }

  &:disabled {
    background-color: ${(props) => props.theme.color.gray[0]};
    cursor: default;
  }

  &:disabled:hover {
    background-color: ${(props) => props.theme.color.gray[0]};
  }
`;

const BlueBtn = styled(Btn)`
  border: none;
  color: ${(props) => props.theme.color.white};
  background-color: ${(props) => props.theme.color.blue[2]};
  &:hover {
    background-color: ${(props) => props.theme.color.blue[1]};
  }
`;

const GrayBtn = styled(BlueBtn)`
  background-color: ${(props) => props.theme.color.gray[0]};
  &:hover {
    background-color: ${(props) => props.theme.color.black[2]};
  }
`;

const Button = ({
  children,
  fontSize = '14px',
  size = 'm',
  theme = 'default',
  ...props
}) => {
  const SIZES = {
    s: '2px 12px',
    m: '12px 15px',
  };

  if (theme === 'default') {
    return (
      <Btn $fontSize={fontSize} $size={SIZES[size]} {...props}>
        {children}
      </Btn>
    );
  }

  if (theme === 'blue') {
    return (
      <BlueBtn $fontSize={fontSize} $size={SIZES[size]} {...props}>
        {children}
      </BlueBtn>
    );
  }

  if (theme === 'gray') {
    return (
      <GrayBtn $fontSize={fontSize} $size={SIZES[size]} {...props}>
        {children}
      </GrayBtn>
    );
  }
};

export default Button;
