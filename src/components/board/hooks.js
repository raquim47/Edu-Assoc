import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from 'fb';
import {
  deleteFromStorage,
  uploadContentToStorage,
  uploadFileToStorage,
} from './utils';
import { useNavigate } from 'react-router-dom';

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
      alert('등록되었습니다.');
      queryClient.invalidateQueries('posts');
      navigate('..');
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
