import { onAuthStateChanged } from 'firebase/auth';
import { useQuery } from '@tanstack/react-query';
import { auth } from '../firebase-init.js';

const fetchAuthState = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, resolve, reject);
    return () => unsubscribe();
  });
};

const useAuthInit = () => {
  const { data: user, isSuccess } = useQuery({
    queryKey: ['auth-init'],
    queryFn: fetchAuthState,
  });

  return { user, isSuccess };
};

export default useAuthInit;
