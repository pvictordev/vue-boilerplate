import type { AuthState } from "../types";
import { defineStore } from "pinia";
import { state } from "./state";
import { actions } from "./actions";
import { getters } from "./getters";

export const useAuthStore = defineStore<
  "auth",
  AuthState,
  typeof getters,
  typeof actions
>("auth", {
  state,
  getters,
  actions,
});
