import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LockView from "../views/LockView.vue"

export const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: "/home",
        name: "homeview",
        component: HomeView 
      },
      { path: "/",
        name: "lockview",
        component: LockView 
      }
    ]
});