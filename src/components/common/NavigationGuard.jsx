import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const NavigationGuard = ({ children }) => {
  const user = useSelector((state) => state.auth.user);
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
