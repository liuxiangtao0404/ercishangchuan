<template>
	<div class="wuye">
		<topnav title="物业缴费"></topnav>
		<div class="nav">
			<div class="jflx">缴费类型</div>
			<ul>
				<li :class="{'shenzi':tab == 1}" @click="tabqh(1)">水费</li>
				<li :class="{'shenzi':tab == 2}" @click="tabqh(2)">电费</li>
				<li :class="{'shenzi':tab == 3}" @click="tabqh(3)">停车费</li>
				<li :class="{'shenzi':tab == 4}" @click="tabqh(4)">燃汽费</li>
				<li :class="{'shenzi':tab == 5}" @click="tabqh(5)">固话宽带</li>
				<li :class="{'shenzi':tab == 6}" @click="tabqh(6)">有线电视</li>
				<li :class="{'shenzi':tab == 7}" @click="tabqh(7)">物业费</li>
			</ul>
		</div>
		
		<div class="center">
			<div v-show="tab == 1">
				<shuifei></shuifei>
			</div>
			<div v-show="tab == 2">
				<dianfei></dianfei>
			</div>
			<div v-show="tab == 3">
				<tingchefei></tingchefei>
			</div>
			<div v-show="tab == 4">
				<ranqifei></ranqifei>
			</div>
			<div v-show="tab == 5">
				<kuandai></kuandai>
			</div>
			<div v-show="tab == 6">
				<dianshi></dianshi>
			</div>
			<div v-show="tab == 7">
				<wuyefei></wuyefei>
			</div>
		</div>
	</div>
</template>

<script>
	import topnav from '../../components/topnav.vue'								//头部
	import shuifei from '../../components/zhihuiwuye/wyjf/shuifei.vue'				//水费
	import dianfei from '../../components/zhihuiwuye/wyjf/dianfei.vue'				//电费
	import tingchefei from '../../components/zhihuiwuye/wyjf/tingchefei.vue'		//停车费
	import ranqifei from '../../components/zhihuiwuye/wyjf/ranqifei.vue'			//燃气费
	import kuandai from '../../components/zhihuiwuye/wyjf/kuandai.vue'				//固话宽带
	import dianshi from '../../components/zhihuiwuye/wyjf/dianshi.vue'				//有线电视
	import wuyefei from '../../components/zhihuiwuye/wyjf/wuyefei.vue'				//物业费
	export default{
		name:"wuye",
		data(){
			return{
				tab:1
			}
		},
		methods:{
			tabqh(id){
				this.tab = id
			}
		},
		components:{
			topnav,
			shuifei,
			dianfei,
			tingchefei,
			ranqifei,
			kuandai,
			dianshi,
			wuyefei,
		}
	}
</script>

<style scoped>
	.wuye{
		width: 98%;
		margin: 0 auto;
		background: white;
	}
	li{
		list-style-type: none;
	}
	
	.nav{
		width: 100%;
		margin-top: 1%;
		font-size: 14px;
		display: flex;
		text-align: center;
	}
	/* 缴费类型 */
	.jflx{
		width: 15%;
		height: 50px;
		color: white;
		line-height: 50px;
		background: #623BFF;
	}
	.nav>ul{
		width: 83%;
		display: flex;
		margin-left: 2%;
	}
	.nav>ul>li{
		width: 20%;
		height: 50px;
		cursor: pointer;
		line-height: 50px;
		margin: 0 0.2%;
		background: #B3B3F2;
	}
	.shenzi{
		background: #957BFE !important;
	}
	
	/* 内容 */
	.center{
		width: 100%;
		height: 700px;
		margin-bottom: 10%;
		border: 1px solid #E6E6FF;
	}
	.center>div{
		width: 100%;
		height: 700px;
	}
</style>
