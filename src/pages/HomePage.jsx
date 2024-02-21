import bannerImage from 'assets/banner.jpeg';
import Footer from 'components/footer/Footer';
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
      <Footer/>
    </>
  );
};

export default HomePage;
