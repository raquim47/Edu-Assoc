import useAuthInit from 'fb/hooks/useAuthInit';
import { RouterProvider } from 'react-router-dom';
import router from './router';

const App = () => {
  useAuthInit();
  return <RouterProvider router={router} />;
};

export default App;
