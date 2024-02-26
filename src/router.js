import PageLayout from 'components/layout/PageLayout';
import LoginPage from 'components/accounts/LoginPage';
import RegisterPage from 'components/accounts/RegisterPage';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import RootLayout from './components/layout/RootLayout';
import HomePage from './components/home/HomePage';
import NavigationGuard from 'components/common/NavigationGuard';
import MyPage from 'components/accounts/MyPage';
import ErrorPage from 'components/common/ErrorPage';
import Announcements from 'components/notices/Announcements';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'accounts',
        element: <PageLayout sideNavType="accounts" />,
        children: [
          { index: true, element: <Navigate to="login" replace /> },
          {
            path: 'login',
            element: (
              <NavigationGuard>
                <LoginPage />
              </NavigationGuard>
            ),
          },
          {
            path: 'register',
            element: (
              <NavigationGuard>
                <RegisterPage />
              </NavigationGuard>
            ),
          },
          {
            path: 'mypage',
            element: <MyPage />,
          },
        ],
      },
      {
        path: 'notices',
        element: <PageLayout sideNavType="notices" />,
        children: [
          { index: true, element: <Navigate to="announcements" replace /> },
          {
            path: 'announcements',
            element: <Announcements />,
          },
        ],
      },
    ],
  },
]);

export default router;
