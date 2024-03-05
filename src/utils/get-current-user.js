import { queryClient } from 'index';

const getCurrentUser = () => {
  const data = queryClient.getQueryData([`/users`, 'GET']);
  return data.user;
};

export default getCurrentUser;
