<template>
  <div class="dashboard">
    <div class="h-screen flex align-items-center justify-content-center">
      <div class="text-center p-4 shadow-7 border-round w-24rem">
        <h2 class="text-center mb-4">Welcome, {{ userName }}</h2>
        <p>The door is open, now you can do whatever you want</p>
        <LoadingAnimation />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRootStore } from "@/stores/store";
import LoadingAnimation from "@/domain/system/components/LoadingAnimation.vue";

const store = useRootStore();

const userName = computed(() => store.accountStore.getAccountLogin.user_name);
</script>
