import Vue from 'vue'
import VueRouter from 'vue-router'
//import HelloWorld from "../components/HelloWorld"
/*import HelloWorld from "@/components/HelloWorld"//@寻找根目录
import LearnVue from "@/components/learnVue"//
import Base from "@/components/base"
import Http from "@/components/http"
import NotFound from "@/components/404"*/
import Home from "@/container/home"
import Mine from "@/container/my"
import Order from "@/container/order"
import ShoppingCar from "@/container/shoppingCar"
import NotFound from "@/container/NotFound"
import Hot from "@/container/home/subPage/Hot"
import Recommend from "@/container/home/subPage/recommend"

Vue.use(VueRouter)

//创建路由
export default new VueRouter({
//	mode:'history',//去掉#
	linkActiveClass:"active",
	linkExactActiveClass:"currentActive",
	routes:[
		{//没有路径
			path:"*",
			component:NotFound,
		},
		{//重定向
			path:"/",
			redirect:"/home"
		},
		{
			path:"/home",
			name:"Home",
			component:Home,
			redirect:"/home/recommend",
			children:[
				{
					path:"Hot",
					component:Hot
				},
				{ 
					path:"recommend",
					component:Recommend
				}
			]
			
		},
		{
			path:"/my",
			name:"Mine",
			component:Mine
			
		},
		{
			path:"/order",
			name:"Order",
			component:Order
			
		},
		{
			path:"/shoppingCar",
			name:"ShoppingCar",
			component:ShoppingCar
			
		}
		/*{//没有路径
			path:"*",
			component:NotFound,
		},
		{//重定向
			path:"/",
			redirect:"/learn"
		},
		{
			path:"/hello/",
			name:"HelloWorld",
			component:HelloWorld
			
		},
		{
			path:"/learn/",
			children:[
				{
					path:"base",
					component:Base
				},
				{
					path:"http",
					component:Http
				}
			],
			name:"LearnVue",
			component:LearnVue
		}*/
	]
})