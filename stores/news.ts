import { defineStore, createPinia, setActivePinia } from 'pinia'
import {  Post } from '@/types/news'

const pinia = createPinia()

export default { store: setActivePinia(pinia) }

class News {
    constructor() {
        this.posts = []
        console.log('constructor')
    }
    posts:Post[] = []
    addPosts(posts:Post[] = []) {
        console.log('addPosts')
        console.log(posts)
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
        console.log('status')
        this.news.addPosts(r.data.value.posts)
    }
        return this.news
    },
    
  }
})

