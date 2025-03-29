<template>
  <div class="language-switcher">
    <button
      v-for="lang in availableLanguages"
      :key="lang.code"
      @click="switchLanguage(lang.code)"
      :class="{ active: currentLocale === lang.code }"
      class="p-2 m-1 border-round"
    >
      {{ lang.name }}
    </button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useI18n } from "vue-i18n";

onMounted(() => {});

const { locale } = useI18n();

const currentLocale = computed(() => locale.value);

const availableLanguages = ref([
  { code: "en", name: "English" },
  { code: "fr", name: "Français" },
]);

const switchLanguage = (langCode) => {
  locale.value = langCode;
};
</script>

<style scoped>
.language-switcher {
  display: flex;
  gap: 0.5rem;
}

button {
  cursor: pointer;
  background: none;
  border: 1px solid #ccc;
}

button.active {
  background-color: #e6e6e6;
  color: black;
}
</style>
