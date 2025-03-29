<template>
  <Toast />

  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import { createMessagingSubscriber } from "@/domain/system/store/subscribers";

onMounted(async () => {
  createMessagingSubscriber();
});
</script>
