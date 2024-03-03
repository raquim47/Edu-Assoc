import styled from 'styled-components';
import HomeBoard from './HomeBoard';
import HomeLogin from './HomeLogin';

const Wrapper = styled.section`
  display: flex;
  max-width: 1200px;
  min-height: 320px;
  margin: 0 auto;
  padding: 20px 0 30px;
  & > :not(:last-child) {
    width: 35%;
  }

  & > :last-child {
    flex-grow: 1;
  }
`;

const BoardsSection = () => {
  return (
    <Wrapper>
      <HomeBoard title="교육자료"  category="education"/>
      <HomeBoard title="공지사항" category="announcements"/>
      <HomeLogin />
    </Wrapper>
  );
};

export default BoardsSection;
