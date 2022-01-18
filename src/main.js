import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

Vue.config.productionTip = false

import { isPC } from '@/utils';
Vue.prototype.isPC = isPC;

import './global.less'
import 'lib-flexible'
import 'muse-ui/lib/styles/base.less';
import { Button, Select,AppBar,Icon,Menu,Popover,List,BottomSheet } from 'muse-ui';
import 'muse-ui/lib/styles/theme.less';

Vue.use(Button);
Vue.use(Select);
Vue.use(AppBar);
Vue.use(Icon);
Vue.use(Menu);
Vue.use(Popover);
Vue.use(List);
Vue.use(BottomSheet);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
