import ToastService from "primevue/toastservice";

export default class MessageProvider {
  provide(app) {
    app.use(ToastService);
  }
}
