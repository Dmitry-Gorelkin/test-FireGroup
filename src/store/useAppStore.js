import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

const useAppStore = create(
  persist(
    immer(set => ({
      posts: [],
      addPost: post =>
        set(state => {
          state.posts.push(post);
          state.posts.sort((a, b) => b.createdAt - a.createdAt);
        }),
    })),
    {
      name: 'appStore',
    }
  )
);

export default useAppStore;
