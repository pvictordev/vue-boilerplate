import type { AuthGenericData, AuthState } from "../types";
import { loginService } from "@/domain/auth/service";
import { useRootStore } from "@/stores/store";

export const actions = {
  async login(
    this: AuthState & { setAccountLogin: (data: AuthGenericData) => void }
  ) {
    const store = useRootStore();

    try {
      store.systemStore.setLoading(true);
      const response = await loginService();

      if (response.success && response.data) {
        this.setAccountLogin(response.data);
      } else {
        store.systemStore.addToastMessage(
          "ERROR",
          "Service failed, please try again"
        );
      }
    } catch (error) {
      console.log("Error", error);
    } finally {
      store.systemStore.setLoading(false);
    }
  },
  setAccountLogin(this: AuthState, data: AuthGenericData) {
    this.authGenericData = data;
  },
};
