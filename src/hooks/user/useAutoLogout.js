import { useEffect } from 'react';
import useFetchUser from './useFetchUser';
import useLogout from './useLogout';

const useAutoLogout = () => {
  const logout = useLogout();
  const { data : { user } } = useFetchUser(); 

  useEffect(() => {
    const events = ['mousemove', 'keydown']; 
    let timer;
    const resetTimer = () => {
      clearTimeout(timer);
      if (user) {
        timer = setTimeout(() => logout(), 7200000);
      }
    };

    events.forEach((event) => window.addEventListener(event, resetTimer));

    resetTimer();

    return () => {
      events.forEach((event) => window.removeEventListener(event, resetTimer));
      clearTimeout(timer);
    };
  }, [user, logout]);

  return null;
};

export default useAutoLogout;
