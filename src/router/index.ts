/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router';
import AuthRoutes from './AuthRoutes';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/Error.vue')
    },
    {
      path: '/main',
      redirect: '/main',
      component: () => import('@/layouts/full/FullLayout.vue'),
      children: [
        {
          name: 'home',
          path: '/',
          component: () => import('@/views/Projects.vue')
        },
        {
          name: 'Account Setting',
          path: '/account-settings',
          component: () => import('@/views/AccountSettings.vue')
        },
        {
          name: 'MyProjects',
          path: '/my-projects',
          component: () => import('@/views/MyProjects.vue')
        },
        {
          name: 'Chat',
          path: '/chat',
          component: () => import('@/views/Chat.vue')
        },
        {
          name: 'Likes',
          path: '/likes',
          component: () => import('@/views/Likes.vue')
        },
        {
          name: 'Invoice',
          path: '/invoice',
          component: () => import('@/views/Invoice.vue')
        },
        {
          name: 'PayCommission',
          path: '/pay-commission',
          component: () => import('@/views/PayCommission.vue')
        },
        {
          name: 'Notes',
          path: '/notes',
          component: () => import('@/views/Notes.vue')
        },
        {
          name: 'GiveComment',
          path: '/give-comment',
          component: () => import('@/views/GiveComment.vue')
        },
        {
          name: 'Blog',
          path: '/blog',
          component: () => import('@/views/Blog.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/authentication/Error.vue')
    },
    AuthRoutes
  ]
});
