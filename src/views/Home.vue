<template>
	<div class="home">
		<div class="home-top">
			<div>
				<img src="../assets/image/shouye/home_top1.jpg" width="40%">
				<div style="display: inline-block;">
					<div class="zicuzi">200</div>
					<div>楼宇数</div>
				</div>
			</div>
			<div>
				<img src="../assets/image/shouye/home_top2.jpg" width="40%">
				<div style="display: inline-block;">
					<div class="zicuzi">200</div>
					<div>等级人口数</div>
				</div>
			</div>
			<div>
				<img src="../assets/image/shouye/home_top3.jpg" width="40%">
				<div style="display: inline-block;">
					<div class="zicuzi">200</div>
					<div>智能设备数</div>
				</div>
			</div>
			<div>
				<img src="../assets/image/shouye/home_top4.jpg" width="40%">
				<div style="display: inline-block;">
					<div class="zicuzi">200</div>
					<div>智能家居数</div>
				</div>
			</div>
			<div>
				<img src="../assets/image/shouye/home_top5.jpg" width="40%">
				<div style="display: inline-block;">
					<div class="zicuzi">200</div>
					<div>预约挂号数</div>
				</div>
			</div>
			<div>
				<img src="../assets/image/shouye/home_top6.jpg" width="35%">
				<div style="display: inline-block;">
					<div class="zicuzi">100</div>
					<div>系统报警数</div>
				</div>
			</div>
		</div>

		<div class="home-center">
			<div class="tu">
				<div class="bingtu">
					<div class="bingtu_first">
						<div>房屋类别统计</div>
						<div>单位：个</div>
					</div>
					<div id="fangwu">

					</div>
				</div>
				<div class="zhuxing">
					<div class="bingtu_first bingtu_left">
						<div>设备分布图</div>
					</div>
				</div>
				<div class="bingtu">
					<div class="bingtu_first">
						<div>设备状态</div>
						<div>单位：个</div>
					</div>
				</div>
			</div>

			<div class="tu">
				<div class="bingtu">
					<div class="bingtu_first bingtu_left">
						<div>预约挂号统计</div>
					</div>
					<div></div>
				</div>
				<div class="zhuxing">
					<div class="bingtu_first bingtu_left">
						<div>缴费统计</div>
					</div>
				</div>
				<div class="bingtu">
					<div class="bingtu_first bingtu_left">
						<div>报修统计</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "home",
		data() {
			return {

			}
		},
		methods: {
			fwbingtu() {
				
			}
		},
		mounted() {
			
		}
	}
</script>

<style scoped>
	.home {
		width: 98%;
		margin: 0 auto;
		background: white;
	}

	.home-top {
		width: 100%;
		height: 100px;
		margin-top: 2%;
		display: flex;
		border: 1px solid #e6e6ff;
	}

	.home-top>div {
		width: 16%;
		height: 70px;
		margin: 1% 2%;
		flex-direction: column;
		padding-top: 0.5%;
		box-sizing: border-box;
	}

	.home-top>div:first-child {
		padding-top: 0;
	}

	.home-top>div>img {
		vertical-align: bottom;
		margin-right: 5%;
	}

	.zicuzi {
		color: #623bfe;
		font-size: 30px;
		font-weight: bold;
	}




	.home-center {
		margin-top: 2%;
	}

	.tu {
		width: 100%;
		height: 300px;
		display: flex;
		margin: 3% 0;
	}

	.tu>div {
		flex-direction: column;
	}

	.bingtu {
		width: 27%;
		height: 300px;
		border: 1px solid #CFCFFF;
	}

	.bingtu_first {
		width: 100%;
		height: 40px;
		padding: 0 2%;
		box-sizing: border-box;
		font-size: 14px;
		line-height: 40px;
		border-bottom: 1px solid #CFCFFF;
	}

	.bingtu_first>div {
		display: inline-block;
	}

	.bingtu_first>div:first-child {
		float: left;
	}

	.bingtu_first>div:last-child {
		float: right;
	}

	.bingtu_left>div {
		float: left !important;
	}

	.zhuxing {
		width: 42%;
		height: 300px;
		margin: 0 2%;
		border: 1px solid #CFCFFF;
	}
</style>
