import { useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from 'firebase/auth';
import { useQuery } from '@tanstack/react-query';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from 'fb';
import { queryClient } from 'index';
import { useNavigate } from 'react-router-dom';

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

export const useUpdateUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const updateUser = async (data) => {
    setIsLoading(true);

    try {
      const user = auth.currentUser;
      const credential = EmailAuthProvider.credential(
        user.email,
        data.password
      );

      await reauthenticateWithCredential(user, credential);

      await updateDoc(doc(db, 'users', user.uid), {
        username: data.username,
        phone: data.phone,
      });
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { updateUser, isLoading };
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

export const useLogout = () => {
  const navigate = useNavigate();

  const onLogout = async () => {
    if (window.confirm('로그아웃하시겠습니까?')) {
      await signOut(auth);
      queryClient.invalidateQueries(['user']);
      navigate('/');
    }
  };

  return onLogout;
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
