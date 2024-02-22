import bannerImage from 'assets/banner.jpeg';
import BoardsSection from 'components/home/BoardsSection';
import ContactSection from 'components/home/ContactSection';

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
