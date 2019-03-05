// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from '../router/'

Vue.config.productionTip = false
Vue.use(VueResource);
Vue.use(VueRouter);

//自定义一个全局指令
/**
* 第一个参数是指令的名称
* 第二个为对象。
*/
Vue.directive('titlecolor',{
	bind(el,binding,vnode){
		el.style.color = '#' + Math.random().toString(16).slice(2,8);
	}
})

Vue.directive('theme',{
	bind(el,binding,vnode){
		if (binding.value == 'wide'){
			el.style.maxWidth = '1260px';
		}else if (binding.value == 'narrow'){
			el.style.maxWidth = '560px';
		}else{
			el.style.maxWidth = '760px';
		}
		if (binding.arg == 'backcolor'){
			el.style.background = '#6677cc';
			el.style.padding = '20px';
		}
	}
})
//自定义过滤器,显示长度
Vue.filter("snippet",function(value){
	return value.slice(0,320) + '...';
});

Vue.filter("formatDate",function(time){
	return new Date(parseInt(time) * 1000).toLocaleString().substr(0,17);
})


//创建路由

const router = new VueRouter({
	mode: "history",
	routes: Routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router: router
})
