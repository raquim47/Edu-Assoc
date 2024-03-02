import { useQuery } from '@tanstack/react-query';
import api from 'utils/api';

const useFetchPost = (postId) => {
  return useQuery({
    queryKey: ['posts', postId],
    queryFn: async () => {
      try {
        const { data } = await api.get(`/posts/${postId}`);
        return data;
      } catch (error) {
        alert(error.message);
      }
    },
    gcTime: 60000,
  });
};

export default useFetchPost;
