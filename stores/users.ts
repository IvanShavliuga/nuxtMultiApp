import { defineStore, createPinia, setActivePinia } from "pinia";
import type { User } from "./../types/users";
import { useFetch } from "nuxt/app";

const pinia = createPinia();

export default { store: setActivePinia(pinia) };

class Users {
  constructor() {
    this.usersList = [];
    this.userView = null;
  }
  usersList: User[] = [];
  userView: User | null = null;
  addUsers(users: User[] = []) {
    if (users.length) {
      this.usersList.push(...users);
    }
  }
  addUserView(user: User) {
    this.userView = user;
  }
}

export const useUsersStore = defineStore("users", {
  state: () => ({
    users: new Users(),
  }),
  getters: {
    getUsers: (state) => state.users?.usersList ?? [],
    getUserView: (state) => state.users.userView,
    getUserAllData: (state) => state.users,
  },
  actions: {
    async addUsers() {
      const r = await useFetch("/api/users");
      if (r.status.value === "success") {
        this.users.addUsers(r.data.value.users);
      }
      return this.users;
    },
    async addUserView(login: string) {
      const r = await useFetch("/api/users?login=" + login);
      if (r.status.value === "success") {
        this.users.addUserView(r.data.value.user);
      }
      return this.users;
    },
  },
});
