import HTTPProvider from "./HTTPProvider";
import UILibraryProvider from "./UILibraryProvider";
import MessageProvider from "./MessageProvider";

class ServiceProviders {
  constructor(app) {
    this.app = app;
  }

  provide(provider) {
    provider.provide(this.app);
    return this;
  }
}

const serviceProviders = (app) => {
  return new ServiceProviders(app);
};

export {
  serviceProviders,
  ServiceProviders,
  HTTPProvider,
  UILibraryProvider,
  MessageProvider,
};
