import { db } from "fb";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useState } from "react";

export const usePost = () => {
  const [isLoading, setIsLoading] = useState(false);

  const createPost = async (postData) => {
    setIsLoading(true);
    try {
      await addDoc(collection(db, 'posts'), {
        ...postData,
        createdAt: serverTimestamp(), 
      });
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { createPost, isLoading };
};