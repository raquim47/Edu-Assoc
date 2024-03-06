import { useLogoutContext } from 'context/logout';
import { useEffect } from 'react';
import getCurrentUser from 'utils/get-current-user';

const useAutoLogout = () => {
  const logoutContext = useLogoutContext();

  useEffect(() => {
    const events = ['mousemove', 'keydown'];
    let timer;
    const resetTimer = () => {
      clearTimeout(timer);
      if (getCurrentUser()) {
        timer = setTimeout(() => logoutContext.logout(), 7200000);
      }
    };

    events.forEach((event) => window.addEventListener(event, resetTimer));

    resetTimer();

    return () => {
      events.forEach((event) => window.removeEventListener(event, resetTimer));
      clearTimeout(timer);
    };
  }, []);

  return null;
};

export default useAutoLogout;
