import Vue from 'vue';
import Router from 'vue-router';

import VueGoogleCharts from 'vue-google-charts';
import VueApexCharts from 'vue-apexcharts';

import Form from '@/components/Form';

Vue.use(Router);
Vue.use(VueGoogleCharts);

Vue.component('apexchart', VueApexCharts);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Emissions',
      name: 'Form',
      component: Form,
    },
  ],
});
