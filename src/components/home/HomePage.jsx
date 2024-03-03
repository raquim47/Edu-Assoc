import bannerImage from 'assets/banner.jpeg';
import BoardsSection from './features/BoardsSection';
import ContactSection from './features/ContactSection';

const HomePage = () => {
  return (
    <>
      <section>
        <img src={bannerImage} alt="배너" />
      </section>
      <BoardsSection/>
      <ContactSection/>
    </>
  );
};

export default HomePage;
