<template>
  <div class="forgot-password">
    <form
      @submit.prevent="onSubmit(!v$.$invalid)"
      class="h-screen flex align-items-center justify-content-center"
    >
      <div class="p-4 shadow-7 border-round w-24rem">
        <h2 class="text-center mb-4">Forgot password</h2>

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

        <!-- Submit Button -->
        <div class="flex justify-content-center mt-2">
          <Button
            type="submit"
            label="Login"
            :disabled="isLoading"
            class="w-full"
          />
        </div>

        <div class="mt-2 text-sm">
          <RouterLink to="/login"
            >Did you remembered your password ?
          </RouterLink>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useRootStore } from "@/stores/store";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers, email } from "@vuelidate/validators";

const store = useRootStore();
const isLoading = computed(() => store.systemStore.getLoading);

const submitted = ref(false);
const formFields = ref({
  email: "",
});
const formRules = {
  email: {
    required: helpers.withMessage("*Email is required", required),
    email,
  },
};
const v$ = useVuelidate(formRules, formFields);
const onSubmit = async (isFormValid) => {
  submitted.value = true;
  if (!isFormValid) {
    return;
  }
  console.log(formFields.value);
};
</script>
