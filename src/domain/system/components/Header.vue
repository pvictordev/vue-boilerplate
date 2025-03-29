<template>
  <header class="flex justify-content-end align-items-center my-3 mr-3 gap-2">
    <nav class="flex justify-content-end">
      <ul class="flex gap-3">
        <li v-show="loginStatus">Dashboard</li>
      </ul>
    </nav>
    <LanguageSwitcher />
  </header>
</template>
<script setup>
import { computed } from "vue";
import LanguageSwitcher from "@/domain/system/components/LanguageSwitcher.vue";
import { useRootStore } from "@/stores/store";

const store = useRootStore();
const loginStatus = computed(
  () => store.accountStore.getAccountLogin.logged_in
);
</script>
