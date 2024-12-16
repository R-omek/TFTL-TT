import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/some-page',
      name: 'some-page',
      component: () => import('@/pages/SomePage.vue'),
    },
  ],
})

let isFirstLoad = true;

router.beforeEach((to, from, next) => {
  const overlay = document.querySelector('.overlay');
  if (overlay && !isFirstLoad) {
    overlay.classList.add('active');
    setTimeout(() => {
      next();
    }, 400);
  } else {
    next();
    isFirstLoad = false;
  }
});

router.afterEach(() => {
  const overlay = document.querySelector('.overlay');
  if (overlay) {
    overlay.classList.add('hide');
    setTimeout(() => {
      overlay.classList.remove('active', 'hide');
    }, 400);
  }
});

export default router
