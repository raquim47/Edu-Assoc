import { useNavigate } from 'react-router-dom';
import { queryClient } from 'index';
import api from 'utils/api';

const useLogout = () => {
  const navigate = useNavigate();

  return async () => {
    try {
      await api.post('/users/logout');
      queryClient.setQueryData(['users'], { user: null });
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };
};

export default useLogout;
