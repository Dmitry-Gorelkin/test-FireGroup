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
      delPost: id =>
        set(state => {
          state.posts = state.posts.filter(e => e.id !== id);
        }),
    })),
    {
      name: 'appStore',
    }
  )
);

export default useAppStore;
