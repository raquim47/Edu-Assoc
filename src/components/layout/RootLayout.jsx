import { Outlet } from 'react-router-dom';
import useAutoLogout from 'hooks/user/useAutoLogout';
import Header from 'components/common/header/Header';
import Footer from 'components/common/footer/Footer';
import { LogoutProvider } from 'context/logout';

const Layer = () => {
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

const RootLayout = () => {
  return (
    <LogoutProvider>
      <Layer />
    </LogoutProvider>
  );
};

export default RootLayout;
