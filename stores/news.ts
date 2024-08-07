import { defineStore, createPinia, setActivePinia } from "pinia";
import type { Post } from "./../types/news";
import { useFetch } from "nuxt/app";

const pinia = createPinia();

export default { store: setActivePinia(pinia) };

class News {
  constructor() {
    this.posts = [];
    this.postsForUser = [];
  }
  posts: Post[] = [];
  postsForUser: Post[] = [];
  addPosts(posts: Post[] = []) {
    if (posts.length) {
      this.posts.push(...posts);
    }
  }
  addPostsForUser(posts: Post[] = []) {
    if (posts.length) {
      this.postsForUser.push(...posts);
    }
  }
}

export const useNewsStore = defineStore("news", {
  state: () => ({
    news: new News(),
  }),
  getters: {
    getNews: (state) => state.news?.posts ?? [],
    getAllData: (state) => state.news,
  },
  actions: {
    async addPosts() {
      const r = await useFetch("/api/news");
      if (r.status.value === "success") {
        this.news.addPosts(r.data.value.posts);
      }
      return this.news;
    },
    async addPostsForUser(id: number) {
      const r = await useFetch(`/api/news?author=${id}`);
      if (r.status.value === "success") {
        this.news.addPostsForUser(r.data.value.posts);
      }
      return this.news;
    },
  },
});
