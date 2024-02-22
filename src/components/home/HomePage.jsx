import bannerImage from 'assets/banner.jpeg';
import BoardsSection from './ui/BoardsSection';
import ContactSection from './ui/ContactSection';

const HomePage = () => {
  return (
    <>
      <section>
        <img src={bannerImage} alt="banner" />
      </section>
      <BoardsSection/>
      <ContactSection/>
    </>
  );
};

export default HomePage;
