import useApiRequest from 'hooks/common/useApiRequest';
import { useEffect, useRef } from 'react';
import { Navigate } from 'react-router-dom';

const AuthGuard = ({ element, requireAuth = false }) => {
  const { data: { user } } = useApiRequest({ url: '/users' });
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