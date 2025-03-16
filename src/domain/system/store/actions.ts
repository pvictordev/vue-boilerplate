export const actions = {
  setLoading(isLoading) {
    this.loading = isLoading;
  },

  addToastMessage(type, payload) {
    this.$patch({
      toastMessage: {
        payload: payload,
        type: type,
      },
    });
  },
};
