import styled from 'styled-components';
import bannerImage from '../assets/banner.jpeg';
import HomeBoard from '../components/ui/home-boards/HomeBoard';
import HomeLogin from '../components/ui/home-boards/HomeLogin';

const HomeBoardSection = styled.section`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;

  & > :not(:last-child) {
    width: 35%;
  }

  & > :last-child {
    flex-grow: 1;
  }
`;

const HomePage = () => {
  return (
    <>
      <section>
        <img src={bannerImage} alt="banner" />
      </section>
      <HomeBoardSection>
        <HomeBoard title="교육자료" />
        <HomeBoard title="공지사항" />
        <HomeLogin />
      </HomeBoardSection>
    </>
  );
};

export default HomePage;
