<template>
	<div class="topnav">
		<div class="baigang"></div>
		<div class="title">{{title}}</div>
	</div>
</template>

<script>
	export default{
		name:"topnav",
		data(){
			return{
				
			}
		},
		props:{
			title: String
		}
	}
</script>

<style scoped>
	.topnav{
		width: 100%;
		height: 30px;
		line-height: 30px;
		background:linear-gradient(to right,#B4A3FE,white);
	}
	.baigang{
		width: 0.3%;
		height: 20px;
		background: white;
		margin-left: 1%;
		margin-top: 0.4%;
		float: left;
	}
	.title{
		font-size: 13px;
		color: white;
		float: left;
		margin-left: 1%;
		font-weight: bold;
	}
</style>
