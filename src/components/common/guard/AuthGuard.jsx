import { useEffect, useRef } from 'react';
import { Navigate } from 'react-router-dom';
import getCurrentUser from 'utils/get-current-user';

const AuthGuard = ({ element, requireAuth = false }) => {
  const user = getCurrentUser()
  const alertShownRef = useRef(false);
  
  useEffect(() => {
    if (!alertShownRef.current) {
      if (!requireAuth && user) {
        alert('이미 로그인되어 있습니다.');
      } else if (requireAuth && !user) {
        alert('로그인이 필요한 페이지입니다.');
      }
      alertShownRef.current = true;
    }
  }, [user, requireAuth]);

  if (!requireAuth && user) {
    return <Navigate to={'/'} replace />;
  } else if (requireAuth && !user) {
    return <Navigate to={'/login'} replace />;
  }

  return <>{element}</>;
};

export default AuthGuard;
