import Vue from "vue";
import App from "./App.vue";
import './registerServiceWorker';
import router from "./router";
import store from "./store";
import vuetify from './plugins/vuetify';
import '@/plugins/googleAnalytics';
import i18n from '@/plugins/i18n';
import '@mdi/font/css/materialdesignicons.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCheck);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount("#app");
