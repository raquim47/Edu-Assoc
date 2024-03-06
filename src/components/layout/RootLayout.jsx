import { Outlet, useLocation } from 'react-router-dom';
import useAutoLogout from 'hooks/user/useAutoLogout';
import Header from 'components/common/header/Header';
import Footer from 'components/common/footer/Footer';
import { LogoutProvider } from 'context/logout';
import { useEffect } from 'react';

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
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <LogoutProvider>
      <Layer />
    </LogoutProvider>
  );
};

export default RootLayout;
