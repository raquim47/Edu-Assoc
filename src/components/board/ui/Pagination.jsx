import styled from "styled-components";

const NavBlock = styled.nav`
  display: flex;
  justify-content: center;
  
  ul {
    display: flex;
    gap: 8px;
  }

  li {
    padding: 5px 10px;
    border: 1px solid ${(props) => props.theme.color.gray[1]};
    font-size: ${(props) => props.theme.fontSize.s};
    color: ${(props) => props.theme.color.black[2]};
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.color.gray[2]};
    }
  }
`;

const Pagination = () => {
  return (
    <NavBlock>
      <ul>
        <li>&lt;&lt;</li>
        <li>&lt;</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>&gt;</li>
        <li>&gt;&gt;</li>
      </ul>
    </NavBlock>
  );
};

export default Pagination;
