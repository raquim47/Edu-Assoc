import { Outlet } from 'react-router-dom';
import useAutoLogout from 'hooks/user/useAutoLogout';
import Header from 'components/common/header/Header';
import Footer from 'components/common/footer/Footer';

const RootLayout = () => {
  useAutoLogout();
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
