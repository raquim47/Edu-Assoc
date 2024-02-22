import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from 'fb/firebase-init'; 

export const checkEmailDuplicate = async (email) => {
  if (!email) return alert('비어있음');

  try {
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('email', '==', email));
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot);
    if(!querySnapshot.empty) {
      alert(email + '는 사용 가능한 이메일입니다.');
    } else {
      alert('이미 존재하는 이메일입니다.');
    };
  } catch (error) {
    console.log(error);
  }
};
