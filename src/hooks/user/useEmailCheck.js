import { useState } from 'react';
import api from 'utils/api';

const useEmailCheck = () => {
  const [isLoading, setIsLoading] = useState(false);

  const checkEmail = async (email) => {
    setIsLoading(true);
    try {
      const { data } = await api.get(`/user/check-email?email=${email}`);
      return data.isAvailable;
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, checkEmail };
};

export default useEmailCheck;
