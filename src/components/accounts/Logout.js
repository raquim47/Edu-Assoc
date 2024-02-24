import { auth } from 'fb';
import { signOut } from 'firebase/auth';
import { redirect } from 'react-router-dom';
import { queryClient } from 'index';

export const action = async () => {
  await signOut(auth);
  queryClient.invalidateQueries(['auth-init']);
  return redirect('/');
};
