<template>
  <div class="dashboard">
    <div class="h-screen flex align-items-center justify-content-center">
      <div class="text-center p-4 shadow-7 border-round w-24rem">
        <h2 class="text-center mb-4">
          {{ t("welcome", { name: userName }) }}
        </h2>
        <p>{{ t("doorOpen") }}</p>
        <LoadingAnimation />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRootStore } from "@/stores/store";
import LoadingAnimation from "@/domain/system/components/LoadingAnimation.vue";
import { useI18n } from "vue-i18n";

const store = useRootStore();
const { t } = useI18n();

const userName = computed(() => store.accountStore.getAccountLogin.user_name);
</script>

<i18n lang="json">
{
  "en": {
    "welcome": "Welcome, {name}",
    "doorOpen": "The door is open, now you can do whatever you want"
  },
  "fr": {
    "welcome": "Bienvenue, {name}",
    "doorOpen": "La porte est ouverte, maintenant vous pouvez faire ce que vous voulez"
  }
}
</i18n>
