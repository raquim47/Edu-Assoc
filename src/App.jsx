import useApiRequest from 'hooks/common/useApiRequest';
import { Navigate, RouterProvider } from 'react-router-dom';
import router from './router';

const App = () => {
  const { isLoading, isError } = useApiRequest({ url: '/users/me' });
  if (isLoading) {
    return <div></div>;
  }

  if (isError) {
    return <Navigate to="/error" replace />;
  }

  return <RouterProvider router={router} />;
};

export default App;
