import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  addDoc,
  collection,
  serverTimestamp,
  getDocs,
  query,
  orderBy,
  startAfter,
  limit,
} from 'firebase/firestore';
import { db } from 'fb';
import {
  deleteFromStorage,
  uploadContentToStorage,
  uploadFileToStorage,
} from './utils';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { queryClient } from 'index';

export const useAddPost = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (postData) => {
      const contentUrl = await uploadContentToStorage(postData.content);
      const fileUrl = postData.file
        ? await uploadFileToStorage(postData.file)
        : null;

      await addDoc(collection(db, 'posts'), {
        title: postData.title,
        author: postData.author,
        authorId: postData.authorId,
        contentUrl,
        fileUrl,
        createdAt: serverTimestamp(),
      });
    },
    onSuccess: () => {
      // alert('등록되었습니다.');
      queryClient.invalidateQueries('posts');
      // navigate('..');
    },
    onError: async (error, _, context) => {
      alert(`에러가 발생했습니다 : ${error.message}`);
      if (context.contentUrl) {
        await deleteFromStorage(context.contentUrl);
      }
      if (context.fileUrl) {
        await deleteFromStorage(context.fileUrl);
      }
    },
  });
};

const fetchPosts = async (page = 1, pageSize = 10, lastVisible = null) => {
  let q = query(
    collection(db, 'posts'),
    orderBy('createdAt', 'desc'),
    limit(pageSize)
  );
  if (page > 1 && lastVisible) {
    q = query(q, startAfter(lastVisible));
  }

  const querySnapshot = await getDocs(q);
  const posts = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  const lastVisibleDoc = querySnapshot.docs[querySnapshot.docs.length - 1];

  const countQuery = query(collection(db, 'posts'));
  const totalPostsSnapshot = await getDocs(countQuery);
  const totalPosts = totalPostsSnapshot.size;

  return { posts, totalPosts, lastVisible: lastVisibleDoc };
};

export const useFetchPosts = (currentPage = 1, pageSize = 10) => {
  const [lastVisible, setLastVisible] = useState(null);

  const result = useQuery({
    queryKey: ['posts', currentPage],
    queryFn: () => fetchPosts(currentPage, pageSize, lastVisible),
    keepPreviousData: true,
  });

  useEffect(() => {
    if (result.isSuccess) {
      setLastVisible(result.data.lastVisible);
    }
  }, [result.isSuccess, result.data]);

  return result;
};
