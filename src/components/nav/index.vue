<template>
	<div class="navigation">
		<!--navigation-->
		<ul>
			<router-link to="/home">
				<i class="iconfont icon-shouye"></i>
				<span class="title">首页</span>
			</router-link>
			<router-link to="/order">
				<i class="iconfont icon-dingdan"></i>
				<span class="title">订单</span>
			</router-link>
			<router-link to="/shoppingCar">
				<i class="iconfont icon-gouwu"></i>
				<span class="title">购物车</span>
			</router-link>
			<router-link to="/my">
				<i class="iconfont icon-wode"></i>
				<span class="title">我的</span>
			</router-link>
		</ul>
	</div>
</template>

<script>
import "../../assets/iconfont.css"
	export default{
		name:"navigation",
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped>
	.navigation{
		position: fixed;
		left:0;
		right: 0;
		bottom: 0;
		height: 40px;
		padding: 10px;
		background: #ffff;
	}
	.navigation ul{
		height:40px;
		width:100%;
		display:flex;
	}
	.navigation ul a{
		text-align: center;
		flex:1;
	}
	.navigation ul a i{
		font-size: 25px;
	}
	.title{
		display: block;
		font-size: 12px;
		margin-top: 5px;
	}
	.active{
		color:green;
	}
</style>