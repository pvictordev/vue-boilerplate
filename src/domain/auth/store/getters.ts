import type { AuthGenericData, AuthState } from "../types";

export const getters = {
  getLogin: (state: AuthState): AuthGenericData => {
    return state.authGenericData;
  },
};
