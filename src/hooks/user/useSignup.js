import { useMutation } from '@tanstack/react-query';
import api from 'utils/api';

const useSignup = () => {
  return useMutation({
    mutationFn: async (userData) => {
      await api.post(`/user/signup`, userData);
    },
    onError: (error) => {
      alert(error.message);
    },
  });
};

export default useSignup;
