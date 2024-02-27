import { useFetchUser } from 'components/accounts/hooks';
import { useEffect, useRef } from 'react';
import { Navigate } from 'react-router-dom';

const NavigationGuard = ({ children }) => {
  const { data : user } = useFetchUser();
  const alertShownRef = useRef(false);

  useEffect(() => {
    if (user && !alertShownRef.current) {
      alert('이미 로그인되어 있습니다.');
      alertShownRef.current = true;
    }
  }, [user]);

  if (user) {
    return <Navigate to="/" replace />;
  }

  return <>{!user && children}</>;
};

export default NavigationGuard;
