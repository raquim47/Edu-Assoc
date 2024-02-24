import { useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from 'fb/firebase-init';
import { queryClient } from 'index';

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
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setTimeout(async () => {
          alert('자동 로그아웃 되었습니다');
          await auth.signOut();
          queryClient.invalidateQueries(['auth-init']);
        }, timeout);
      }
    });

    return () => unsubscribe();
  }, [timeout]);
};
