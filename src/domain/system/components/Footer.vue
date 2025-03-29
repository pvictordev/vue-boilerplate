<template>
  <footer class="flex justify-center items-center py-3 pl-3 text-white">
    <span> © {{ currentYear }} Vue Boilerplate </span>
  </footer>
</template>

<script setup>
import { ref } from "vue";

const currentYear = ref(new Date().getFullYear());
</script>
