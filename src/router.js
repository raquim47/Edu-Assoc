import { createBrowserRouter, Navigate } from 'react-router-dom';
import RootLayout from './components/layout/RootLayout';
import PageLayout from 'components/layout/PageLayout';
import ErrorPage from 'components/common/ErrorPage';
import HomePage from './components/home/HomePage';
import AuthGuard from 'components/common/guard/AuthGuard';
import LoginPage from 'components/users/LoginPage';
import SignupPage from 'components/users/SignupPage';
import MyPage from 'components/users/MyPage';
import PostGuard from 'components/common/guard/PostGuard';
import PostsPage from 'components/posts/PostsPage';
import PostDetailPage from 'components/posts/PostDetailPage';
import EditPostPage from 'components/posts/EditPostPage';
import GreetingsPage from 'components/about/GreetingsPage';
import LocationPage from 'components/about/LocationPage';
import HistoryPage from 'components/about/HistoryPage';

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
          { path: 'login', element: <AuthGuard element={<LoginPage />} /> },
          { path: 'signup', element: <AuthGuard element={<SignupPage />} /> },
          {
            path: 'mypage',
            element: <AuthGuard element={<MyPage />} requireAuth />,
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
                  {
                    path: 'new',
                    element: (
                      <AuthGuard element={<EditPostPage />} requireAuth />
                    ),
                  },
                  {
                    path: ':postId',
                    children: [
                      { index: true, element: <PostDetailPage /> },
                      {
                        path: 'update',
                        element: (
                          <AuthGuard
                            element={<EditPostPage updateMode />}
                            requireAuth
                          />
                        ),
                      },
                    ],
                  },
                ],
              },
            ],
          },
          // about
          { path: 'greetings', element: <GreetingsPage /> },
          { path: 'location', element: <LocationPage /> },
          { path: 'history', element: <HistoryPage /> },
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
