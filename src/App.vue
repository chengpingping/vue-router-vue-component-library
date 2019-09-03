<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<ul>
    	<router-link tag="li" :to="{name:'HelloWorld',params:{id:hparams}}">hello</router-link>
    	<router-link tag="li" :to="{name:'LearnVue'}">learn</router-link>
    </ul>
    <button @click="gotoHello" type="button" name="btn">去hello</button>-->
   	<router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
  	return{
  		hparams:"hello world",
  		clickparams:"hahahaah"
  	}
  },
  components: {
  },
  methods:{
  	gotoHello(){
//		this.$router.push({path:"/hello"})
//			this.$router.replace({path:"/hello"})
//			this.$router.go(-1)
			this.$router.push({name:'HelloWorld',params:{id:this.clickparams}})
  	}
  }
}
</script>

<style>
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td { margin:0; padding:0; } 
body, button, input, select, textarea { font:12px/1.5tahoma, arial, \5b8b\4f53; } 
h1, h2, h3, h4, h5, h6{ font-size:100%; } 
address, cite, dfn, em, var { font-style:normal; } 
code, kbd, pre, samp { font-family:couriernew, courier, monospace; } 
small{ font-size:12px; } 
ul, ol { list-style:none; } 
body{background: #F1F1F1;}
a { text-decoration:none; } 
a:hover { text-decoration:underline; } 
sup { vertical-align:text-top; } 
sub{ vertical-align:text-bottom; } 
legend { color:#000; } 
fieldset, img { border:0; } 
button, input, select, textarea { font-size:100%; } 
table { border-collapse:collapse; border-spacing:0; }
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/

/*.router-link-active{
	color:red;
}*/
/*.active{
	color:green;
}*/

/*.router-link-exact-active{
	border:4px solid green;
}*/

/*.currentActive{
	border:4px solid green;
}

ul li{
	list-style: none;
	display: inline-block;
	margin: 0 20px;
	text-decoration: underline;
	cursor: pointer;
}*/
</style>
