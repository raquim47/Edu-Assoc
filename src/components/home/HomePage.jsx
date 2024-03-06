import bannerImage from 'assets/banner.jpeg';
import styled from 'styled-components';
import BoardsSection from './features/BoardsSection';
import ContactSection from './features/ContactSection';

const BannerSection = styled.div`
  height: 300px;
`;

const HomePage = () => {
  return (
    <>
      <BannerSection>
        <img src={bannerImage} alt="배너" />
      </BannerSection>
      <BoardsSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
