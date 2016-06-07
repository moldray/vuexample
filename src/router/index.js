import VueRouter from 'vue-router'
import config from './config'

export default function (Vue){
  Vue.use(VueRouter);

  const router = new VueRouter({
    history: true,
    saveScrollPosition: true
  });

  config(router);

  const app = Vue.extend(require('../components/app.vue'));

  router.start(app, '#app');
}
