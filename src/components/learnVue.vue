<template>
	<div class="learnVue">
		learn学习:<!--{{this.$route.params.id}}-->
		<ul>
			<router-link to="/learn/base">基础</router-link>
			<router-link to="/learn/http">Http</router-link>
		</ul>
		<router-view />
	</div>
</template>

<script>
</script>

<style>
</style>