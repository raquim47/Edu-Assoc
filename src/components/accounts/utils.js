import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from 'fb';

export const checkEmailDuplicate = async (
  email,
  setError,
  setEmailDupChecked,
  clearErrors
) => {
  if (!email) return alert('이메일을 입력해주세요');
  const emailRegex = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i;
  if (!emailRegex.test(email)) return alert('이메일 형식에 맞지 않습니다.');

  try {
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('email', '==', email));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      alert('이미 존재하는 이메일입니다.');
      setError('email', { message: '이미 존재하는 이메일입니다.' });
    } else {
      alert(email + '는 사용 가능한 이메일입니다.');
      setEmailDupChecked(true);
      clearErrors('email');
    }
  } catch (error) {
    console.error(error);
  }
};
