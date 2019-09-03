<template>
	<div class="my">
		<!--Mine-->
		<el-row>
		  <el-button>默认按钮</el-button>
		  <el-button type="primary">主要按钮</el-button>
		  <el-button type="success">成功按钮</el-button>
		  <el-button type="info">信息按钮</el-button>
		  <el-button type="warning">警告按钮</el-button>
		  <el-button type="danger">危险按钮</el-button>
		</el-row>
		<swiper :options="swiperOption">
		    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
		    	<img :src="slide.img" />
		    </swiper-slide>
		    <div class="swiper-pagination" slot="pagination"></div>
		</swiper>
		<Nav/>
	</div>
</template>

<script>
import Nav from "../../components/nav"
export default{
	data(){
		return{
			banner:[{
				img:""
			}],
			swiperOption: {
	          pagination: {
	            el: '.swiper-pagination'
	          }
         	}
		}
	},
	components:{
		Nav
	},
	mounted(){
		this.$axios.get("")//网络请求的地址
		.then(res=>{
			this.banner=res.data.banner
		})
		.catch(error=>{
			console.log(error)
		})
	}
}
</script>

<style>
</style>