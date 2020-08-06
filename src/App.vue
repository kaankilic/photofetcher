<template>
	<div id="app">
		<PhotosWrapper></PhotosWrapper>
	</div>
</template>

<script>
import PhotosWrapper from './components/PhotosWrapper.vue'
export default {
	name: 'App',
	components: {
		PhotosWrapper
	},
	data(){
		return {
			isGrayscaled: true
		}
	},
	methods:{
	}
}
</script>
