import Vue from 'vue';
import Router from 'vue-router';
import Trend from 'vuetrend';
//import VueCharts from 'vue-chartjs'
//import { Bar, Line } from 'vue-chartjs'
import VueGoogleCharts from 'vue-google-charts'
import ApexCharts from 'apexcharts'
import VueApexCharts from 'vue-apexcharts'

// import { DonutChart } from 'vue-morris';
// import JQuery from 'jquery';

// import Raphael from 'raphael/raphael'
// global.Raphael = Raphael

import CO2 from '@/components/CO2';
import Form from '@/components/Form';
import Ping from '@/components/Ping';
import Books from '@/components/Books';

Vue.use(Router);
Vue.use(Trend);
Vue.use(VueGoogleCharts);
//Vue.use(VueApexCharts);
Vue.component('apexchart', VueApexCharts);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Emissions',
      name: 'Form',
      component: Form,
    },
    // {
    //   path: '/ping',
    //   name: 'Ping',
    //   component: Ping,
    // },
    // {
    //   path: '/books',
    //   name: 'Books',
    //   component: Books,
    // },
  ],
});
