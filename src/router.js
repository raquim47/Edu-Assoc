import { createBrowserRouter, Navigate } from 'react-router-dom';
import RootLayout from './components/layout/RootLayout';
import PageLayout from 'components/layout/PageLayout';
import ErrorPage from 'components/common/ErrorPage';
import HomePage from './components/home/HomePage';
import NavGuard from 'components/common/NavGuard';
import LoginPage from 'components/users/LoginPage';
import SignupPage from 'components/users/SignupPage';
import MyPage from 'components/users/MyPage';
import PostGuard from 'components/common/PostGuard';
import PostsPage from 'components/posts/PostsPage';
import PostDetailPage from 'components/posts/PostDetailPage';
import NewPostPage from 'components/posts/NewPostPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigate to="/home" replace /> },
      { path: 'home', element: <HomePage /> },
      {
        element: <PageLayout />,
        children: [
          // auth
          { path: 'login', element: <NavGuard element={<LoginPage />} /> },
          { path: 'signup', element: <NavGuard element={<SignupPage />} /> },
          {
            path: 'mypage',
            element: <NavGuard element={<MyPage />} requireAuth />,
          },
          // posts
          {
            path: 'posts/',
            element: <PostGuard />,
            children: [
              {
                path: ':category',
                children: [
                  { index: true, element: <PostsPage /> },
                  { path: 'new', element: <NewPostPage /> },
                  { path: ':postId', element: <PostDetailPage /> },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: '/error',
    element: <ErrorPage />,
  },
]);

export default router;
