import { useNavigate } from 'react-router-dom';
import { queryClient } from 'index';
import api from 'utils/api';

const useLogout = () => {
  const navigate = useNavigate();

  return async () => {
    try {
      await api.post('/users/logout');
      await queryClient.invalidateQueries(['/users/me', 'GET']);
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };
};

export default useLogout;
