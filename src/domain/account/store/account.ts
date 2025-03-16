import { defineStore } from "pinia";
import { state } from "./state";
import { actions } from "./actions";
import { getters } from "./getters";

export const useAccountStore = defineStore("account", {
  state: () => state,
  getters: getters,
  actions: actions,
});
