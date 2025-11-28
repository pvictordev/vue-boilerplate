import { computed } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { useRootStore } from "@/stores/store";
import Dashboard from "@/domain/dashboard/components/Dashboard.vue";
import Auth from "@/domain/auth/components/Auth.vue";
import NotFound from "@/domain/system/components/NotFound.vue";

const requiresAuthRoutes = [
  {
    path: "/",
    name: "Home",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
];
const guestRoutes = [
  {
    path: "/auth",
    name: "Auth",
    component: Auth,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active-link",
  routes: [...requiresAuthRoutes, ...guestRoutes],
});

// auth guard
router.beforeEach(async (to, from, next) => {
  if (to.matched.some((item) => item.meta.requiresAuth)) {
    try {
      const store = useRootStore();

      const loginStatus = computed(() => store.authStore.getLogin.logged_in);
      if (loginStatus.value) {
        next();
        return;
      }
      if (to.name !== "Auth") {
        next({ name: "Auth" });
        return;
      } else {
        next();
      }
    } catch (error) {
      console.error("Error during route guard execution", error);
    }
  } else {
    next();
  }
});

export default router;
