import { useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { useQuery } from '@tanstack/react-query';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from 'fb';
import { queryClient } from 'index';

export const useFetchUser = () => {
  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['user'],
    queryFn: () => {
      return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
          if (user) {
            try {
              const userInfoRef = doc(db, 'users', user.uid);
              const userInfoSnap = await getDoc(userInfoRef);
              const userInfo = userInfoSnap.data();
              resolve({
                uid: user.uid,
                email: user.email,
                phone: userInfo.phone,
                username: userInfo.username,
              });
            } catch (error) {
              reject(error);
            }
          } else {
            resolve(null);
          }
        });
        return () => unsubscribe();
      });
    },
  });
  return { user, isLoading, isError };
};

export const useRegisterUser = () => {
  const [isLoading, setIsLoading] = useState(false);

  const register = async (data) => {
    setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        username: data.username,
        phone: data.phone,
        email: data.email,
      });
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { register, isLoading };
};

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading };
};

export const useAutoLogout = (timeout) => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setTimeout(async () => {
          alert('자동 로그아웃 되었습니다');
          await signOut(auth);
          queryClient.invalidateQueries(['auth-init']);
        }, timeout);
      }
    });

    return () => unsubscribe();
  }, [timeout]);
};
