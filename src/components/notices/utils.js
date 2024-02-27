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

export const editorModules = {
  toolbar: [
    [{ font: [] }, { size: [] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ color: [] }, { background: [] }],
    [{ script: 'sub' }, { script: 'super' }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }, { align: [] }],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
};