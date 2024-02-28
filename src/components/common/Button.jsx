import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const Btn = styled.button`
  display: inline-block;
  text-align: center;
  padding: ${({ $size }) => ($size === 's' ? '2px 12px' : '12px 15px')};
  font-size: ${({ $fontSize }) => $fontSize};
  border: 1px solid ${({ theme }) => theme.color.gray[1]};
  transition: all 0.2s ease;
  width: ${({ $width }) => $width};
  cursor: pointer;
  
  ${({ theme, $color }) =>
    $color === 'blue' &&
    css`
      border: none;
      color: ${theme.color.white};
      background-color: ${theme.color.blue[2]};
      &:hover {
        background-color: ${theme.color.blue[1]};
      }
    `}

  ${({ theme, $color }) =>
    $color === 'gray' &&
    css`
      background-color: ${theme.color.gray[0]};
      color: ${theme.color.white};
      &:hover {
        background-color: ${theme.color.black[2]};
      }
    `}

  ${({ theme, $color }) =>
    $color === 'white' &&
    css`
      color: ${theme.color.black};
      background-color: ${theme.color.white};
      &:hover {
        color: ${theme.color.white};
        background-color: ${theme.color.blue[2]};
      }
    `}

  &:disabled {
    background-color: ${({ theme }) => theme.color.gray[0]};
    cursor: default;
    &:hover {
      background-color: ${({ theme }) => theme.color.gray[0]};
    }
  }
`;

export const Button = ({
  to,
  children,
  fontSize = '14px',
  size = 'm',
  color = 'blue',
  width = 'auto',
  as = 'button',
  ...props
}) => {
  const Component = to ? Link : as
  return (
    <Btn
      as={Component}
      to={to}
      $fontSize={fontSize}
      $size={size}
      $width={width}
      $color={color}
      {...props}
    >
      {children}
    </Btn>
  );
};

export default Button;
