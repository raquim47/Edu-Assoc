import { useAutoLogout, useFetchUser } from 'components/accounts/hooks';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { setUser } from 'store/auth-slice';
import router from './router';

const App = () => {
  useAutoLogout(14400000);
  const dispatch = useDispatch();
  const { user: fetchedUser, isLoading, isError } = useFetchUser();
  
  useEffect(() => {
    if (!isLoading && !isError && fetchedUser) {
      dispatch(setUser(fetchedUser));
    } else {
      dispatch(setUser(null));
    }
  }, [fetchedUser, isLoading, isError, dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred. Please try again later.</div>;
  }

  return <RouterProvider router={router} />;
};

export default App;
