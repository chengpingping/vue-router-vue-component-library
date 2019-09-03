# 1.路由
注意：项目初始化时不要集成vue-router

# 2.安装
cnpm install vue-router --save

# 3.使用
在main.js中引入：
import VueRouter from 'vue-router'
Vue.use(VueRouter)

# 4.创建路由
在main.js中
const router=new VueRouter({
	routes:[{
		path:"/",
		name:"HelloWorld",
		component:HelloWorld
		
	}]
})
# 5.给出路由显示的位置
在App.vue中：
<router-view/>

# 6.将路由队形注入vue实例中
在main.js中：
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

# 7.路由的跳转
<router-link to="">
属性：tag

# 8.参数的引用（动态路由）
path:"/learn/:id"
访问：{{this.$route.params.id}}

# 9.路由嵌套
在路由中加children：
		{
			path:"/learn/",
			children:[//二级
				{
					path:"base",
					component:Base,
					children:[]//三级
				},
				{
					path:"http",
					component:Http
				}
			],
			name:"LearnVue",
			component:LearnVue
		}
		
# 10.编程式的导航
router.push({})
router.replace({})
router.go({})

# 11.命名路由
<router-link tag="li" :to="{name:'HelloWorld',params:{id:hparams}}">hello</router-link>
this.$route.push({name:'HelloWorld',params:{id:this.clickparams}})    	
//注意是route不是router

# 12.重定向
{//没有路径
	path:"*",
	component:NotFound,
},
{//重定向
	path:"/",
	redirect:"/learn"
},

# 13.路由的高亮
在index.js中
	linkActiveClass:"active",//模糊匹配
	linkExactActiveClass:"currentActive",//精准匹配
在App.vue中css:
点亮图标
/*.router-link-active{
	color:red;
}*/
.active{
	color:red;
}
//精准匹配
/*.router-link-exact-active{
	border:4px solid green;
}*/

.currentActive{
	border:4px solid green;
}

# 14.ElementIU
https://element.eleme.cn/#/zh-CN
## 1.安装
cnpm i element-ui -S
## 2.引入element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
## 3.使用
Vue.use(ElementUI);
## 4.按需加载
首先，安装 babel-plugin-component:
cnpm install babel-plugin-component -D
更改 .babelrc：
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
引入需要应用的部分：
import { Button, Select } from 'element-ui';
Vue.use(Button)
Vue.use(Select)
# 15.swipper组件
https://github.com/surmon-china/vue-awesome-swiper
## 1.安装
	cnpm install vue-awesome-swiper --save
## 2.引入
	import VueAwesomeSwiper from 'vue-awesome-swiper'
	Vue.use(VueAwesomeSwiper, /* { default global options } */)
## 3.使用
### 1.单页面引用：SPA
### 2.异步数据引用：Async data example
	使用网络请求组件：axios

# 16.Vue常用组件库
https://github.com/vuejs/awesome-vue
## 1.使用vue-progressbar
安装：cnpm install vue-progressbar
导入：
import VueProgressBar from 'vue-progressbar'
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
Vue.use(VueProgressBar, options)
使用：<vue-progress-bar></vue-progress-bar>
	https://github.com/hilongjw/vue-progressbar