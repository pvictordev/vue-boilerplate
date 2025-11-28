import type { AuthState } from "../types";

export const state = (): AuthState => ({
  authGenericData: {
    logged_in: false,
    is_admin: false,
    user_name: "",
  },
});
