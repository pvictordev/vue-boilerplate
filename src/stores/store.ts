import { defineStore } from "pinia";
import { useAuthStore } from "@/domain/auth/store/auth";
import { useSystemStore } from "@/domain/system/store/system";

export const useRootStore = defineStore("store", () => {
  const authStore = useAuthStore();
  const systemStore = useSystemStore();

  return {
    authStore,
    systemStore,
  };
});
