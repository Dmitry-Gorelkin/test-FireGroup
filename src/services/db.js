// db.js
import { openDB } from 'idb';

export const initDB = async () => {
  return openDB('image-store', 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('images')) {
        db.createObjectStore('images', { keyPath: 'id' });
      }
    },
  });
};

export default initDB;
