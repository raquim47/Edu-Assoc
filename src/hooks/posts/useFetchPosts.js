import { useQuery } from '@tanstack/react-query';
import api from 'utils/api';

const useFetchPosts = (category, limit, page = 1) => {
  return useQuery({
    queryKey: ['posts', category, page],
    queryFn: async () => {
      try {
        const { data } = await api.get(
          `/posts/${category}?limit=${limit}&page=${page}`
        );
        return data;
      } catch (error) {
        alert(error.message);
      }
    },
  });
};

export default useFetchPosts;
