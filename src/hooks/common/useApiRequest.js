import { useQuery, useMutation } from '@tanstack/react-query';
import api from 'utils/api';

const useApiRequest = ({
  method = 'GET',
  url,
  config = {},
  gcTime = 300000,
  staleTime = 0,
}) => {
  const fetchFn = async (data) => {
    try {
      const response = await api[method.toLowerCase()](url, data, config);
      return response.data;
    } catch (error) {
      alert(error.message);
    }
  };

  const queryResult = useQuery({
    queryKey: [url, method],
    queryFn: fetchFn,
    enabled: method === 'GET',
    staleTime,
    gcTime: method === 'GET' ? gcTime : 0,
  });

  const mutationResult = useMutation({ mutationFn: fetchFn });

  return method === 'GET' ? queryResult : mutationResult;
};

export default useApiRequest;
