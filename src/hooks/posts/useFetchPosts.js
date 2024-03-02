import { useQuery } from '@tanstack/react-query';
import api from 'utils/api';

const useFetchPosts = (category, limit, page = 1, searchType, keyword) => {
  let queryKey = ['posts', category, page];
  let url = `/posts/?category=${category}&limit=${limit}&page=${page}`;

  if (searchType && keyword) {
    url += `&searchType=${searchType}&keyword=${encodeURIComponent(keyword)}`;
    queryKey = [...queryKey, searchType, keyword];
  }
  return useQuery({
    queryKey: queryKey,
    queryFn: async () => {
      try {
        const { data } = await api.get(url);
        return data;
      } catch (error) {
        alert(error.message);
      }
    },
  });
};

export default useFetchPosts;
