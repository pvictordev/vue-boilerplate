import { accountLoginService } from "@/domain/account/service";
import { useRootStore } from "@/stores/store";

export const actions = {
  async accountLogin() {
    const store = useRootStore();

    try {
      store.systemStore.setLoading(true);
      const response = await accountLoginService();

      if (response.success) {
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

  setAccountLogin(state) {
    this.accountGenericData = state;
  },
};
