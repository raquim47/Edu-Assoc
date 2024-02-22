import useAuthInit from 'fb/hooks/useAuthInit';
import styled from 'styled-components';
import MainNav from './MainNav';
import SubNav from './SubNav';

const Wrapper = styled.header`
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

const Header = () => {
  const { user, isSuccess } = useAuthInit();
  console.log(user, isSuccess);
  return (
    <Wrapper>
      <SubNav />
      <MainNav />
    </Wrapper>
  );
};

export default Header;
