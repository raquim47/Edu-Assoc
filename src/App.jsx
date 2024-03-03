import useFetchUser from 'hooks/user/useFetchUser';
import { Navigate, RouterProvider } from 'react-router-dom';
import router from './router';

const App = () => {
  const { isLoading, isError } = useFetchUser();
  if (isLoading) {
    return <div></div>;
  }

  if (isError) {
    return <Navigate to="/error" replace />;
  }

  return <RouterProvider router={router} />;
};

export default App;
