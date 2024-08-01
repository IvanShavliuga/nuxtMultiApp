import { defineStore, createPinia, setActivePinia } from "pinia";
import type { User } from "./../types/users";
import { useFetch } from "nuxt/app";

const pinia = createPinia();

export default { store: setActivePinia(pinia) };

class Users {
  constructor() {
    this.usersList = [];
  }
  usersList: User[] = [];
  addPosts(users: User[] = []) {
    if (users.length) {
      this.usersList.push(...users);
    }
  }
}

export const useUsersStore = defineStore("users", {
  state: () => ({
    users: new Users(),
  }),
  getters: {
    getUsers: (state) => state.users?.usersList ?? [],
  },
  actions: {
    async addUsers() {
      const r = await useFetch("/api/users");
      if (r.status.value === "success") {
        this.users.addPosts(r.data.value.users);
      }
      return this.users;
    },
  },
});
