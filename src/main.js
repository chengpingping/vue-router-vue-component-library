// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from "axios"
//import ElementUI from 'element-ui'
import { Button,Row } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import VueProgressBar from 'vue-progressbar'
//import VueRouter from 'vue-router'
//import HelloWorld from "./components/HelloWorld"

const options = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'left',
  inverse: false
}

Vue.use(VueAwesomeSwiper, )
Vue.use(Button)
Vue.use(Row)
Vue.use(VueProgressBar, options)
//Vue.use(ElementUI);
//Vue.use(VueRouter)

Vue.prototype.$axios=Axios;
Vue.config.productionTip = false

/*//创建路由
const router=new VueRouter({
	routes:[{
		path:"/hello",
		name:"HelloWorld",
		component:HelloWorld
		
	}]
})*/

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
