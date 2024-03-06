import useApiRequest from 'hooks/common/useApiRequest';
import { queryClient } from 'index';
import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutContext = createContext();

export const LogoutProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { mutate } = useApiRequest({
    url: '/users/logout',
    method: 'POST',
  });

  const logout = () => {
    setIsLoading(true);
    mutate(null, {
      onSuccess: async () => {
        await queryClient.invalidateQueries(['/users/me', 'GET']);
        navigate('/');
        setIsLoading(false);
      },
      onError: () => {
        setIsLoading(false);
      },
    });
  };

  return (
    <LogoutContext.Provider value={{ logout, isLoading }}>
      {children}
    </LogoutContext.Provider>
  );
};

export const useLogoutContext = () => useContext(LogoutContext);
