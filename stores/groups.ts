import { defineStore, createPinia, setActivePinia } from "pinia";
import type { Group } from "./../types/groups";
import { useFetch } from "nuxt/app";

const pinia = createPinia();

export default { store: setActivePinia(pinia) };

class Groups {
  constructor() {
    this.groups = [];
    this.groupsByUser = [];
    this.groupView = null;
  }
  groups: Group[] = [];
  groupsByUser: Group[] = [];
  groupView: Group | null = null;
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
  addGroupView(group: Group) {
    this.groupView = group
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
    async addGroupsByUser(idUsr: number) {
      const r = await useFetch(`/api/groups?follow=${idUsr}`);
      if (r.status.value === "success") {
        this.groupsData.addGroupsByUser(r.data.value.groups);
      }
      return this.groups;
    },
    async addGroupView(idGrp: number) {
      const r = await useFetch(`/api/groups?view=${idGrp}`);
      if (r.status.value === "success" && r.data.value.groups.length > 0) {
        this.groupsData.addGroupView(r.data.value.groups[0]);
      }
      return this.groups;
    },
  },
});
