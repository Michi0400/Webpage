import Vue from 'vue';
import { ThisTypedComponentOptionsWithArrayProps } from 'vue/types/options';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import './registerServiceWorker';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
} as ThisTypedComponentOptionsWithArrayProps<Vue, object, object, object, never> & { vuetify: any }).$mount('#app');
