import type { App } from "vue";
import { createI18n } from "vue-i18n";

export default class LocalizationProvider {
  provide(app: App) {
    const i18n = createI18n({
      legacy: false,
      locale: "en",
      fallbackLocale: "fr",
      globalInjection: true,
      silentTranslationWarn: true,
      silentFallbackWarn: true,
      messages: {},
    });

    app.use(i18n);
  }
}
