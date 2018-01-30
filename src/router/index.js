import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Dashboard from '@/components/Dashboard';
import Messages from '@/components/Messages';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/messages',
      name: 'Messages',
      component: Messages,
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
  ],
});
