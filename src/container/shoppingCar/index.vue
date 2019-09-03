<template>
	<div class="shoppingcar">
		<!--ShoppingCar-->
		<swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
		    <!-- slides -->
		    <swiper-slide>I'm Slide 1</swiper-slide>
		    <swiper-slide>I'm Slide 2</swiper-slide>
		    <swiper-slide>I'm Slide 3</swiper-slide>
		    <!-- Optional controls -->
		    <div class="swiper-pagination"   slot="pagination"></div>
  		</swiper>
		<Nav/>
	</div>
</template>

<script>
import Nav from "../../components/nav"
export default{
	data(){
		return{
			swiperOption:{
				autoplay:true,
				delay:200
			}
		}
	},
	components:{
		Nav
	}
}
</script>

<style>
</style>