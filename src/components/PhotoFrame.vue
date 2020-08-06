<template>
	<div class="h-64 bg-local bg-cover relative" v-background="src">
		<template slot="spinner"></template>
		<template slot="footer"></template>
	</div>
</template>

<script>
export default {
	name: 'PhotoFrame',
	props:{
		src:{
			type: String,
			required: true
		}
	}
}
</script>
