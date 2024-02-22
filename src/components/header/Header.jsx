import styled from 'styled-components';
import MainNav from './MainNav';
import SubNav from './SubNav';

const Wrapper = styled.header`
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
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
