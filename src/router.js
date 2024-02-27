import PageLayout from 'components/layout/PageLayout';
import LoginPage from 'components/accounts/LoginPage';
import SignupPage from 'components/accounts/SignupPage';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import RootLayout from './components/layout/RootLayout';
import HomePage from './components/home/HomePage';
import NavigationGuard from 'components/common/NavigationGuard';
import MyPage from 'components/accounts/MyPage';
import ErrorPage from 'components/common/ErrorPage';
import AnnouncementsPage from 'components/notices/AnnouncementsPage';
import NewPostPage from 'components/notices/NewPostPage';

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
            path: 'signup',
            element: (
              <NavigationGuard>
                <SignupPage />
              </NavigationGuard>
            ),
          },
          {
            path: 'mypage',
            element: (
              <NavigationGuard requireAuth={true}>
                <MyPage />
              </NavigationGuard>
            ),
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
            children: [
              { index: true, element: <AnnouncementsPage /> },
              { path: 'new', element: <NewPostPage /> },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
