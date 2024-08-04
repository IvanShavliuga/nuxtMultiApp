import { defineStore, createPinia, setActivePinia } from "pinia";
import type { Group } from "./../types/groups";
import { useFetch } from "nuxt/app";

const pinia = createPinia();

export default { store: setActivePinia(pinia) };

class Groups {
  constructor() {
    this.groups = [];
    this.groupsByUser = [];
  }
  groups: Group[] = [];
  groupsByUser: Group[] = [];
  addGroups(groups: Group[] = []) {
    if (groups.length) {
      this.groups.push(...groups);
    }
  }
  addGroupsByUser(groups: Group[] = []) {
    if (groups.length) {
      this.groupsByUser.push(...groups);
    }
  }
}

export const useGroupsStore = defineStore("groups", {
  state: () => ({
    groupsData: new Groups(),
  }),
  getters: {
    getGroups: (state) => state.groupsData?.groups ?? [],
    getGroupsAllData: (state) => state.groupsData,
  },
  actions: {
    async addGroups() {
      const r = await useFetch("/api/groups");
      if (r.status.value === "success") {
        this.groupsData.addGroups(r.data.value.groups);
      }
      return this.groups;
    },
    async addGroupsAllData(idUsr: number) {
      const r = await useFetch(`/api/groups?follow=${idUsr}`);
      if (r.status.value === "success") {
        this.groupsData.addGroupsByUser(r.data.value.groups);
      }
      return this.groups;
    },
  },
});
