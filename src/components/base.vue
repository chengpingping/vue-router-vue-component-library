<template>
	<div>
		学习基础:{{getCurrentUrl}}
	</div>
</template>

<script>
	export default{
		name:"base",
		data(){
			return{
				
			}
		},
		computed:{
			getCurrentUrl(){
				return this.$route.path
			}
		}
	}
</script>

<style>
</style>