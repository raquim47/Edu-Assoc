import { onAuthStateChanged } from 'firebase/auth';
import { useQuery } from '@tanstack/react-query';
import { auth } from './firebase-init.js';

const fetchAuthState = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user);
      } else {
        reject('No user');
      }
    });
    return () => unsubscribe();
  });
};

export const useAuthInit = () => {
  const { data: user } = useQuery({
    queryKey: ['auth-init'],
    queryFn: fetchAuthState,
  });

  return { user };
};
