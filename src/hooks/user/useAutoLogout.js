import useApiRequest from 'hooks/common/useApiRequest';
import { useEffect } from 'react';
import useLogout from './useLogout';

const useAutoLogout = () => {
  const logout = useLogout();
  const {
    data: { user },
  } = useApiRequest({ url: `/users` });

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
