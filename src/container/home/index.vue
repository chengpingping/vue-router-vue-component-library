<template>
	<div class="home">
		<!--Home-->
		<ul>
			<router-link tag="li" to="/home/recommend">推荐</router-link>
			<router-link tag="li" to="/home/hot">热门</router-link>
		</ul>
		<router-view/>				
		<!--<keep-alive></keep-alive>-->
		<Nav/>
	</div>
</template>

<script>
import Nav from "../../components/nav"
export default{
	components:{
		Nav
	}
}
</script>

<style scoped>
	.home ul{
		width: 100%;
		text-align:center;
		margin-top: 20px;
	}
	.home ul li{
		display: inline-block;
		font-size: 20px;
		margin: 0 20px;
	}
	.active{
		color:red;
	}
</style>