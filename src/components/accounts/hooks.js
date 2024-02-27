import { useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from 'firebase/auth';
import { useMutation, useQuery } from '@tanstack/react-query';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from 'fb';
import { queryClient } from 'index';
import { useNavigate } from 'react-router-dom';

export const useFetchUser = () => {
  return useQuery({
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
};

export const useRegisterUser = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (data) => {
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
    },
    onSuccess: () => {
      alert('가입이 완료되었습니다');
      navigate('/accounts/login');
    },
    onError: (error) => {
      alert(`계정 등록 중 오류가 발생했습니다: ${error.message}`);
    },
  });
};

export const useLogin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async ({ email, password }) => {
      await signInWithEmailAndPassword(auth, email, password);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['user']);
      navigate('/');
    },
    onError: (error) => {
      switch (error.code) {
        case 'auth/user-not-found':
        case 'auth/wrong-password':
        case 'auth/invalid-credential':
          alert('이메일 또는 비밀번호가 유효하지 않습니다');
          break;
        default:
          alert('로그인하는 동안 오류가 발생했습니다. 다시 시도해주세요.');
      }
    },
  });
};

export const useUpdateUser = () => {
  return useMutation({
    mutationFn: async ({ username, phone, password }) => {
      const user = auth.currentUser;
      const credential = EmailAuthProvider.credential(user.email, password);

      await reauthenticateWithCredential(user, credential);
      await updateDoc(doc(db, 'users', user.uid), {
        username,
        phone,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['user']);
    },
    onError: (error) => {
      switch (error.code) {
        case 'auth/missing-password':
          alert('비밀번호가 유효하지 않습니다');
          break;
        default:
          alert(`정보 변경 중 오류가 발생했습니다: ${error.message}`);
      }
    },
  });
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
