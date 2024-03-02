import { useQuery } from '@tanstack/react-query';
import api from 'utils/api';

const useFetchUser = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      try {
        const { data } = await api.get(`/users`);
        return data;
      } catch (error) {
        alert(error.message);
      }
    },
  });
};

export default useFetchUser;
