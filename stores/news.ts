import { defineStore, createPinia, setActivePinia } from 'pinia'
import {  Post } from '@/types/news'
import { useFetch } from 'nuxt/app'

const pinia = createPinia()

export default { store: setActivePinia(pinia) }

class News {
    constructor() {
        this.posts = []
    }
    posts:Post[] = []
    addPosts(posts:Post[] = []) {
        if(posts.length) {
            this.posts.push(...posts)
        }

    }
}

export const useNewsStore = defineStore('news', {
  state: () => ({
   news:  new News()
  }),
  getters: {
    getNews: (state) => state.news?.posts ?? [],
  },
  actions: {
    async addPosts() {
    const r = await useFetch('/api/news')
    if (r.status.value === 'success') {
        this.news.addPosts(r.data.value.posts)
    }
        return this.news
    },
    
  }
})

