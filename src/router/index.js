import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Wuye from '../views/ZhiHuiWuYe/wuye.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'Home',
		component: Home
	},
	//智慧物业
	{
		path: '/wuye', //物业缴费
		name: 'Wuye',
		component: Wuye
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
