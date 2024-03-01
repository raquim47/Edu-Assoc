import { useMutation } from '@tanstack/react-query';
import api from 'utils/api';

const useUpdateUser = () => {
  return useMutation({
    mutationFn: async (userData) => {
      await api.patch(`/user/update`, userData);
    },
    onError: (error) => {
      alert(error.message);
    },
  });
};

export default useUpdateUser;
