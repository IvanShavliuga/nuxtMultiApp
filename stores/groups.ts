import { defineStore, createPinia, setActivePinia } from 'pinia'
import {  Group } from './../types/groups'
import { useFetch } from 'nuxt/app'

const pinia = createPinia()

export default { store: setActivePinia(pinia) }

class Groups {
    constructor() {
        this.groups = []
        console.log('constructor')
    }
    groups:Group[] = []
    addGroups(groups:Group[] = []) {
        if(groups.length) {
            this.groups.push(...groups)
        }

    }
}

export const useGroupsStore = defineStore('groups', {
  state: () => ({
    groups:  new Groups()
  }),
  getters: {
    getGroups: (state) => state.groups ?? [],
  },
  actions: {
    async addPosts() {
    const r = await useFetch('/api/groups')
    if (r.status.value === 'success') {
        this.groups.addGroups(r.data.value.groups)
    }
        return this.groups
    },
    
  }
})

