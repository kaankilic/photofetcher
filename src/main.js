import Vue from 'vue'
import App from './App.vue'
import VueWait from 'vue-wait'
import "./assets/css/app.css"
import store from "./store.js";
Vue.config.productionTip = false
Vue.use(VueWait);
Vue.directive('background', {
	inserted: function (el,binding,vnode) {
		var image = new Image();
		image.src = binding.value;
		el.style.backgroundColor = "#cbd5e0";
		el.style.transition = "all .4s ease-in";
		vnode.context.$emit("loading");
		image.onload = function(){
			el.style.backgroundImage = `url(`+image.src+`)`
			vnode.context.$emit("loaded");
		}
	}
})
new Vue({
	store,
	wait: new VueWait(),
	render: function (h) { return h(App) },
}).$mount('#app')
