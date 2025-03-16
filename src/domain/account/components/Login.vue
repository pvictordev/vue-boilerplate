<template>
  <div class="login">
    <form
      @submit.prevent="onSubmit(!v$.$invalid)"
      class="h-screen flex align-items-center justify-content-center"
    >
      <div class="p-4 shadow-7 border-round w-3">
        <h2 class="text-center mb-4">Login</h2>

        <!-- Email Field -->
        <div class="flex flex-column gap-2 mb-3">
          <label for="email" class="font-medium">Email</label>
          <InputText
            id="email"
            placeholder="Enter your email"
            name="email"
            v-model="v$.email.$model"
            class="w-full"
          />
          <small
            v-if="
              (v$.email.required.$invalid && submitted) ||
              v$.email.$pending.$response
            "
            class="p-error"
          >
            {{ v$.email.required.$message }}
          </small>
        </div>

        <!-- Password Field -->
        <div class="flex flex-column gap-2 mb-3">
          <label for="password" class="font-medium">Password</label>
          <InputText
            id="password"
            type="password"
            placeholder="Enter your password"
            name="password"
            v-model="v$.password.$model"
            class="w-full"
          />
          <small
            v-if="
              (v$.password.required.$invalid && submitted) ||
              v$.password.$pending.$response
            "
            class="p-error"
          >
            {{ v$.password.required.$message }}
          </small>
        </div>

        <!-- Submit Button -->
        <div class="flex justify-content-center mt-2">
          <Button
            type="submit"
            label="Login"
            :disabled="isLoading"
            class="w-full"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRootStore } from "@/stores/store";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers, email } from "@vuelidate/validators";

const store = useRootStore();
const isLoading = computed(() => store.systemStore.getLoading);
const loginStatus = computed(
  () => store.accountStore.getAccountLogin.logged_in
);

const submitted = ref(false);
const formFields = ref({
  email: "",
  password: "",
});
const formRules = {
  email: {
    required: helpers.withMessage("*Email is required", required),
    email,
  },
  password: {
    required: helpers.withMessage("*Password is required", required),
  },
};
const v$ = useVuelidate(formRules, formFields);
const onSubmit = async (isFormValid) => {
  submitted.value = true;
  if (!isFormValid) {
    return;
  }

  await store.accountStore.accountLogin();
};
</script>
