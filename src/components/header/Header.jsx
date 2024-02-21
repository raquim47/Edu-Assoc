import styled from 'styled-components';
import MainNav from './MainNav';
import SubNav from './SubNav';

const Wrapper = styled.header`
  border-bottom: 1px solid #ddd;
`;

const Header = () => {
  return (
    <Wrapper>
      <SubNav />
      <MainNav />
    </Wrapper>
  );
};

export default Header;
