import { useMutation } from '@tanstack/react-query';
import api from 'utils/api';

const useNewPost = () => {
  return useMutation({
    mutationFn: async (postData) => {
      await api.post(`/posts`, postData);
    },
  });
};

export default useNewPost;
