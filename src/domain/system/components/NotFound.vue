<template>
  <div
    class="flex flex-column align-items-center justify-content-center min-h-screen text-center"
  >
    <div class="text-5xl font-bold">404</div>
    <div class="text-2xl mt-2">Page Not Found</div>
    <p class="mt-2">The page you are looking for does not exist.</p>
    <Button label="Go Home" class="mt-4" @click="goHome"></Button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const goHome = () => {
  router.push("/");
};
</script>
