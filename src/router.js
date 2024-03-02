import PageLayout from 'components/layout/PageLayout';
import SignupPage from 'components/accounts/SignupPage';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import RootLayout from './components/layout/RootLayout';
import HomePage from './components/home/HomePage';
import NavGuard from 'components/common/NavGuard';
import MyPage from 'components/accounts/MyPage';
import ErrorPage from 'components/common/ErrorPage';
import PostsPage from 'components/posts/PostsPage';
import NewPost from 'components/posts/NewPost';
import LoginForm from 'components/accounts/ui/LoginForm';

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
            element: <NavGuard element={<LoginForm />} />,
          },
          {
            path: 'signup',
            element: <NavGuard element={<SignupPage />} />,
          },
          {
            path: 'mypage',
            element: <NavGuard requireAuth={true} element={<MyPage />} />,
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
              { index: true, element: <PostsPage /> },
              {
                path: 'new',
                element: <NavGuard requireAuth={true} element={<NewPost />} />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
