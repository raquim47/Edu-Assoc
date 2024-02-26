import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from 'fb';
import {
  deleteFromStorage,
  uploadContentToStorage,
  uploadFileToStorage,
} from './utils';

export const useAddPost = () => {
  const queryClient = useQueryClient();

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
      queryClient.invalidateQueries('posts');
    },
    onError: async (_0, _, context) => {
      if (context.contentUrl) {
        await deleteFromStorage(context.contentUrl);
      }
      if (context.fileUrl) {
        await deleteFromStorage(context.fileUrl);
      }
    },
  });
};
