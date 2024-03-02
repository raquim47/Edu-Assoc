import { useMutation } from '@tanstack/react-query';
import api from 'utils/api';

const useCountPostViews = () => {
  return useMutation({
    mutationFn: async (postId) => {
      await api.post(`/posts/${postId}/views`);
    },
    onError: (error) => {
      alert(error.message);
    },
  });
};

export default useCountPostViews;
