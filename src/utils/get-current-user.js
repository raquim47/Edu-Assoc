import { queryClient } from 'index';

const getCurrentUser = () => {
  const data = queryClient.getQueryData([`/users/me`, 'GET']);
  return data.user;
};

export default getCurrentUser;
