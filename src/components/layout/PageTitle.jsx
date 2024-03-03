import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  height: 120px;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.color.blue[1]};
  margin-bottom: 30px;

  h2 {
    padding-left: 5px;
    font-size: ${(props) => props.theme.fontSize['4xl']};
    font-weight: 500;
    color: ${(props) => props.theme.color.blue[1]};
  }
`;

const BreadScrumbs = styled.ul`
  display: flex;

  li {
    position: relative;
    font-weight: 300;
  }

  li:not(:last-child)::before {
    content: '';
    position: absolute;
    right: -20px;
    top: 50%;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    border-top: solid 1px ${(props) => props.theme.color.gray[1]};
    border-right: solid 1px ${(props) => props.theme.color.gray[1]};
    transform: rotate(45deg) translateY(-50%);
  }

  li:not(:last-child) {
    margin-right: 40px;
  }
`;

const PageTitle = ({ categoryName, currentPathName }) => {
  return (
    <Wrapper>
      <h2>{currentPathName}</h2>
      <BreadScrumbs>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>{categoryName}</li>
        <li>{currentPathName}</li>
      </BreadScrumbs>
    </Wrapper>
  );
};

export default PageTitle;
