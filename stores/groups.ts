import { defineStore, createPinia, setActivePinia } from 'pinia'
import {  Group } from './../types/groups'
import { useFetch } from 'nuxt/app'

const pinia = createPinia()

export default { store: setActivePinia(pinia) }

class Groups {
    constructor() {
        this.groups = []
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
    groupsData:  new Groups()
  }),
  getters: {
    getGroups: (state) => state.groupsData?.groups ?? [],
  },
  actions: {
    async addPosts() {
    const r = await useFetch('/api/groups')
    if (r.status.value === 'success') {
        this.groupsData.addGroups(r.data.value.groups)
    }
        return this.groups
    },
    
  }
})

