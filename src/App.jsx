import { useAutoLogout } from 'components/accounts/hooks';
import { useAuthInit } from 'fb/hooks';
import { RouterProvider } from 'react-router-dom';
import router from './router';

const App = () => {
  useAutoLogout(14400000);
  const { user } = useAuthInit();
  return <>{user && <RouterProvider router={router} />}</>;
};

export default App;
