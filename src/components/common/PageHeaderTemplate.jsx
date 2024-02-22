import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';

const PATH_NAMES = {
  accounts: '회원서비스',
  login: '로그인',
  register: '회원가입',
};

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  height: 120px;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.color.blue[1]};
  margin-bottom: 40px;

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
    border-top: solid 1px ${props => props.theme.color.gray[1]};
    border-right: solid 1px ${props => props.theme.color.gray[1]};
    transform: rotate(45deg) translateY(-50%);
  }

  li:not(:last-child) {
    margin-right: 40px;
  }
`;

const PageHeaderTemplate = () => {
  const { pathname } = useLocation();
  const segmentNames = pathname
    .split('/')
    .filter(Boolean)
    .map((segment) => PATH_NAMES[segment] || segment);

  return (
    <Wrapper>
      <h2>{segmentNames.at(-1)}</h2>
      <BreadScrumbs>
        <li>
          <Link to="/">홈</Link>
        </li>
        {segmentNames.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </BreadScrumbs>
    </Wrapper>
  );
};

export default PageHeaderTemplate;
