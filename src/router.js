import PageLayout from 'components/layout/PageLayout';
import LoginPage from 'components/accounts/LoginPage';
import RegisterPage from 'components/accounts/RegisterPage';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import RootLayout from './components/layout/RootLayout';
import HomePage from './components/home/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'accounts',
        element: <PageLayout sideNavType="accounts" />,
        children: [
          { index: true, element: <Navigate to="login" replace /> },
          {
            path: 'login',
            element: <LoginPage />,
          },
          {
            path: 'register',
            element: <RegisterPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
