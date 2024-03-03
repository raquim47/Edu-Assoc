import PageLayout from 'components/layout/PageLayout';
import SignupPage from 'components/accounts/SignupPage';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import RootLayout from './components/layout/RootLayout';
import HomePage from './components/home/HomePage';
import NavGuard from 'components/common/NavGuard';
import MyPage from 'components/accounts/MyPage';
import ErrorPage from 'components/common/ErrorPage';
import LoginForm from 'components/accounts/ui/LoginForm';
import Posts from 'components/posts/Posts';
import PostDetail from 'components/posts/PostDetail';
import NewPost from 'components/posts/NewPost';
import PostGuard from 'components/common/PostGuard';

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
          { path: 'login', element: <NavGuard element={<LoginForm />} /> },
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
                  { index: true, element: <Posts /> },
                  { path: 'new', element: <NewPost /> },
                  { path: ':postId', element: <PostDetail /> },
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
