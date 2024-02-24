import { auth } from 'fb/firebase-init';
import { queryClient } from 'index';
import { redirect } from 'react-router-dom';

export const action = async () => {
  await auth.signOut();
  queryClient.invalidateQueries(['auth-init']);
  return redirect('/');
};
