import { useEffect } from 'react';
import getCurrentUser from 'utils/get-current-user';
import useLogout from './useLogout';

const useAutoLogout = () => {
  const logout = useLogout();

  useEffect(() => {
    const events = ['mousemove', 'keydown'];
    let timer;
    const resetTimer = () => {
      clearTimeout(timer);
      if (getCurrentUser()) {
        timer = setTimeout(() => logout(), 7200000);
      }
    };

    events.forEach((event) => window.addEventListener(event, resetTimer));

    resetTimer();

    return () => {
      events.forEach((event) => window.removeEventListener(event, resetTimer));
      clearTimeout(timer);
    };
  }, [logout]);

  return null;
};

export default useAutoLogout;
