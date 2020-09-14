<template>
	<div class="shuifei">
		<div class="cklszd">查看历史账单</div>
		<div class="clear"></div>
		<div class="sfjiaofei">
			<div class="sfbiao" v-for="(item,index) in fenyexianshi">
				<div>
					<div class="left cuti">{{item.riqi}}</div>
					<div class="left cuti" style="margin-left: 5%;">{{item.leixing}}</div>
				</div>
				<div class="jiaofeiren">
					<div class="left">{{item.dizhi}}</div>
					<div class="left" style="margin-left: 5%;">{{item.jiaofeiren}}</div>
				</div>
				<div class="lijijiaofei">
					<div class="left lanzi cuti">
						<span class="chengzi">￥</span>{{item.jiaofeijine}}
					</div>
					<div class="right jiaofei" @click="suoyin()">立即缴费</div>
				</div>
			</div>
		</div>
		<div class="fenye">
			<div class="fyxg">
				<el-pagination
				background
				@size-change="handleSizeChange"
				@current-change="handleCurrentChange"
				:current-page="currentPage"
				:page-sizes="[9,6,3]"
				:page-size="pagesize"
				layout="total, sizes, prev, pager, next, jumper"
				:total="dianfei.length">
				</el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"dianfei",
		data(){
			return{
				dianfei:[],
				currentPage: 1, //初始页
				pagesize: 9 ,//每页显示的数据
				fenyexianshi:[]
			}
		},
		methods:{
			handleSizeChange(val) {
				this.pagesize = val;
				// console.log(`每页 ${val} 条`);
				this.fenyexianshi = this.dianfei.slice((this.currentPage-1)*this.pagesize,this.currentPage*this.pagesize)
				
			},
			handleCurrentChange(val) {
				this.currentPage = val;
				this.fenyexianshi = this.dianfei.slice((this.currentPage-1)*this.pagesize,this.currentPage*this.pagesize)
				// console.log(`当前页: ${val}`);
			}
		},
		created() {
			// this.axios.get("https://www.fastmock.site/mock/1a4c41deff4cc8fea2a4c0ec9edc97aa/zhihui/api/dianfei").then(
			// 	(res) => {
			// 		this.dianfei = res.data.data.shuifei
			// 		this.fenyexianshi = this.dianfei.slice((this.currentPage-1)*this.pagesize,this.currentPage*this.pagesize)
			// 	}).catch((error) => {
			// 	console.log(error)
			// })
		}
	}
</script>

<style scoped>
	.shuifei{
		width: 100%;
		height: 700px;
		position: relative;
	}
	.left{
		float: left;
	}
	.right{
		float: right;
	}
	.cklszd{
		width: 120px;
		height: 30px;
		line-height: 30px;
		color: white;
		font-size: 14px;
		text-align: center;
		background: #C0C0FF;
		float: right;
	}
	.clear{
		clear:both;
	}
	
	
	/*缴费名单*/
	.sfjiaofei{
		width: 80%;
		height: 500px;
		margin: 2% auto;
		display:flex;
		flex-wrap: wrap;
	}
	.sfbiao{
		width: 28%;
		height: 140px;
		margin: 1% 2.5%;
		border: 1px solid #E6E6FF;
		background: #F9F9FF;
		border-radius: 20px;
		padding: 1% 2%;
		box-sizing: border-box;
	}
	.sfbiao>div{
		clear: both;
		height: 40px;
	}
	.jiaofeiren{
		font-size: 14px;
	}
	.cuti{
		font-weight: bold;			/* 粗体 */
	}
	.chengzi{
		color: #FF6600;				/*橙色字体*/
	}
	.lanzi{
		color: #4FA0FF;				/*蓝色字体*/
	}
	.lijijiaofei{
		margin-top: 5%;
	}
	.jiaofei{
		background: #B9B9FF;
		font-size: 12px;
		padding: 1% 2%;
		color: white;
		cursor: pointer;
		border-radius: 5px;
		box-sizing: border-box;
	}
	
	.fenye{
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 50px;
		border-top: 1px solid #E6E6FF;
	}
	.fyxg{
		float: right;
		margin: 0.8% 1%;
	}
</style>
