import Router from 'vue-router';
import Hello from '@/components/Hello';
import Login from '@/components/Login';
import Demo from './demo.router';

export default new Router({
  base: '/learn-vue/',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    ...Demo,
  ],
});
