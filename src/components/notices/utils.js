import { storage } from "fb";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const uploadContentToStorage = async (htmlContent) => {
  const blob = new Blob([htmlContent], { type: 'text/html' });
  const storageRef = ref(storage, `contents/${Date.now()}.html`);
  const snapshot = await uploadBytes(storageRef, blob);
  return getDownloadURL(snapshot.ref);
};

export const uploadFileToStorage = async (file) => {
  const storageRef = ref(storage, `files/${Date.now()}_${file.name}`);
  const snapshot = await uploadBytes(storageRef, file);
  return getDownloadURL(snapshot.ref);
};

export const deleteFromStorage = async (url) => {
  const fileRef = ref(storage, url);
  await deleteObject(fileRef);
};