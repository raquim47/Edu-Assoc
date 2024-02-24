import { useAutoLogout, useFetchUser } from 'components/accounts/hooks';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { setUser } from 'store/user-slice';
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
    return <div></div>;
  }

  if (isError) {
    return <div>에러</div>;
  }

  return <RouterProvider router={router} />;
};

export default App;
