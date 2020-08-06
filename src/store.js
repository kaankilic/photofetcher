import Vue from 'vue';
import Vuex from 'vuex';
import photosModule from './stores/photos'
Vue.use(Vuex);
const state = {
	page:1,
	limit:4
}
const getters = {
	getPage: state => {
		return state.page;
	},
	getLimit: state => {
		return state.limit;
	}
}

const mutations = {
	setPage(state, page){
		state.page = page
	},
	setLimit(state, limit){
		state.limit = limit
	}
}

const actions = {
	SET_PAGE(context, data){
		context.commit('setPage', data)
	},
	SET_LIMIT(context, data){
		context.commit('setLimit', data)
	}
}
export default new Vuex.Store({
	state,
	getters,
	mutations,
	modules: {
		photos: photosModule,
	},
	actions
})
