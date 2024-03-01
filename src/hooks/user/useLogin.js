import { useMutation } from '@tanstack/react-query';
import { queryClient } from 'index';
import api from 'utils/api';

const useLogin = () => {
  return useMutation({
    mutationFn: async (loginData) => {
      await api.post(`/user/login`, loginData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['user']);
    },
    onError: (error) => {
      alert(error.message);
    },
  });
};

export default useLogin;
