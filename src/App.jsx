import { useAutoLogout, useFetchUser } from 'components/accounts/hooks';
import { RouterProvider } from 'react-router-dom';
import router from './router';

const App = () => {
  const { isLoading, isError } = useFetchUser();
  useAutoLogout(14400000);

  if (isLoading) {
    return <div></div>;
  }

  if (isError) {
    return <div>에러</div>;
  }

  return <RouterProvider router={router} />;
};

export default App;
