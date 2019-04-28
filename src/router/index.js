import Vue from 'vue';
import Router from 'vue-router';
import CO2 from '@/components/CO2';
import Ping from '@/components/Ping';
import Books from '@/components/Books';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'CO2',
      component: CO2,
    },
    {
      path: '/ping',
      name: 'Ping',
      component: Ping,
    },
    {
      path: '/books',
      name: 'Books',
      component: Books,
    },
  ],
});
