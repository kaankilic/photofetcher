<template>
	<div class="lg:w-750 mx-4 lg:mx-auto">
		<h1 class="text-3xl text-bold my-4">Photo Fetcher</h1>
		<div class="flex justify-between my-4 items-center">
			<div class="relative">
				<div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-500 ease-in">
					<input type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full outline-none bg-white border-4 border-gray-400 appearance-none cursor-pointer" v-on:change="toggleGrayscaled()"/>
					<label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-400 cursor-pointer"></label>
				</div>
				<label for="toggle" class="text-sm font-medium text-gray-700 select-none cursor-pointer">Make photos grayscale.</label>
			</div>
			<div class="relative">
				<button class="bg-purple-600 text-white text-sm font-medium py-2 px-6 rounded" v-on:click.prevent="fetchPhotos()" :disabled="$wait.any">
					<span v-if="$wait.any">...</span>
					<span v-else>Fetch New Photos</span>
				</button>
			</div>
		</div>
		<v-wait for="photos_loading">
			<template slot="waiting">
				<div class="flex flex-wrap -mx-2 overflow-hidden">
					<div class="w-full lg:w-1/2 my-2 px-2 overflow-hidden" v-for="i in 4">
						<div class="h-64">
							<ContentLoader :width="400" :height="300" primaryColor="#cbd5e0" secondaryColor="#fff">
								<rect x="0" y="0" rx="0" ry="0" width="400" height="300" />
							</ContentLoader>
						</div>
					</div>
				</div>
			</template>
			<div class="flex flex-wrap -mx-2 overflow-hidden">
				<div class="w-full lg:w-1/2 my-2 px-2 overflow-hidden" v-for="(photo,index) in photos">
					<PhotoFrame :src="photo.download_url">
						<slot name="footer">
							<div class="absolute bottom-0 right-0 p-2 w-full bg-black text-gray-200 opacity-75">
								<div class="text-base text-medium">{{photo.author}}</div>
								<div class="text-sm text-medium">{{photo.url}}</div>
							</div>
						</slot>
					</PhotoFrame>
				</div>
			</div>
		</v-wait>
	</div>
</template>
<script>
import { ContentLoader } from 'vue-content-loader'
import PhotoFrame from './PhotoFrame.vue'
export default {
	name: 'PhotosWrapper',
	components: {
		PhotoFrame,
		ContentLoader
	},
	data(){
		return {
			isGrayscaled:false
		}
	},
	computed:{
		photos(){
			return this.$store.getters.getPhotos;
		},
		page(){
			return this.$store.getters.getPage;
		}
	},
	async created(){
		this.$wait.start('photos_loading');
		this.$store.dispatch("SET_PAGE",Math.floor(Math.random(0,200)*100))
		this.$store.dispatch("LOAD_PHOTOS",{page:this.page,limit:4}).then(()=>{
			setTimeout(()=>{
				this.$wait.end("photos_loading");
			},1000);
		});
	},
	methods:{
		toggleGrayscaled(){
			this.$wait.start('photos_loading');
			this.isGrayscaled = !this.isGrayscaled;
			this.$store.commit("toggleGrayscaled",this.isGrayscaled);
			setTimeout(()=>{
				this.$wait.end("photos_loading");
			},1000);
		},
		fetchPhotos(){
			this.$wait.start('photos_loading');
			this.$store.dispatch("SET_PAGE",Math.floor(Math.random(0,200)*100))
			this.$store.dispatch("LOAD_PHOTOS",{page:this.page, limit:4}).then(()=>{
				this.$store.commit("toggleGrayscaled",this.isGrayscaled);
				setTimeout(()=>{
					this.$wait.end("photos_loading");
				},1000);
			})
		}
	}
}
</script>
