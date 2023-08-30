import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Unitindex from "@/views/Units/Unitindex.vue";
import GroupIndex from "@/views/Group/GroupIndex.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/unit',
      component: Unitindex
    },
    {
      path: '/group',
      component: GroupIndex
    }
  ]
})

export default router
