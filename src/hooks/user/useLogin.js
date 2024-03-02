import { useMutation } from '@tanstack/react-query';
import api from 'utils/api';

const useLogin = () => {
  return useMutation({
    mutationFn: async (loginData) => {
      await api.post(`/users/login`, loginData);
    },
    onError: (error) => {
      alert(error.message);
    },
  });
};

export default useLogin;
