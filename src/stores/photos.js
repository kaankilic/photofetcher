import axios from 'axios';
const state = {
	list: []
}
const getters = {
	getPhotos: state =>{
		return state.list
	}
}
const mutations = {
	setPhotos(state, photos){
		state.list = photos
	},
	toggleGrayscaled(state,isGrayscaled){
		state.list.map((item,index)=>{
			var url = new URL(item.download_url);
			var search_params = url.searchParams;
			if(isGrayscaled){
				search_params.set(`grayscale`,true);
			}else{
				search_params.delete('grayscale');
			}
			item.download_url = url.toString();
		});
	}
}
const actions = {
	async LOAD_PHOTOS(context,data){
		const response = await axios.get("https://picsum.photos/v2/list",{params:data});
		context.commit("setPhotos",response.data);
		if(response.data.length==0){
			context.commit("setPage",1);
			context.dispatch("LOAD_PHOTOS");
		}
	}
}
export default {
	state,
	getters,
	mutations,
	actions
}
