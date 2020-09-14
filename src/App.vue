<template>
	<div id="app">
		<template v-if="this.$store.state.pddl == true">
			<login></login>
		</template>
		<template v-else>
			<div>
				<div class="nav" :style="{background:yanse}">
					<div class="nav-center">
						<div class="nav-center-left">
							<div>
								<img src="./assets/image/shouye/logo.png" width="90%" class="juzhong" style="margin-bottom: 10px;">
							</div>
							<div>
								<h2 style="color: white;">XXXX智慧社区管理系统</h2>
							</div>
						</div>
						<div class="nav-center-right">
							<div @click="erji(1)">
								<img src="./assets/image/shouye/wode.png" class="juzhong" width="25%">
								{{this.$store.state.username}}
								<img src="./assets/image/shouye/xiajiantou.png">
							</div>
							<div @click="erji(2)">
								<img src="./assets/image/shouye/huanfu.png" class="juzhong" width="25%">换肤
							</div>
							<div @click="erji(3)">
								<img src="./assets/image/shouye/wenhao.png" class="juzhong" width="25%">
								帮助
								<img src="./assets/image/shouye/xiajiantou.png">
							</div>
							<div>
								<img src="./assets/image/shouye/guanji.png" class="juzhong" width="60%" @click="tuichu()">
							</div>
						</div>
					</div>
					<!-- 个人资料 -->
					<div class="geren" v-show="grzl">
						<div>修改密码</div>
						<div>个人资料</div>
					</div>
					<!-- 换肤 -->
					<div class="huanfu" v-show="hf">
						<div @click="yanse='red'"></div>
						<div @click="yanse='#a797e7'"></div>
						<div @click="yanse='#861a9d'"></div>
						<div @click="yanse='#068922'"></div>
						<div @click="yanse='#957bfe'"></div>
					</div>
					<!-- 帮助 -->
					<div class="geren bangzhu" v-show="bz">
						<div>帮助文档</div>
						<div>关于系统</div>
					</div>
				</div>

				<div class="center">
					<template v-if="dhqiehuan == true">
						<div class="center-left">
							<div class="qiehuan">
								<img src="./assets/image/shouye/qiehuan1.png" @click="qiehuan()">
							</div>
							<router-link to="/" tag="div">
								<div class="yijicaidan">
									<img src="./assets/image/shouye/shouye.png" class="juzhong imgbj">
									<div style="display: inline-block;">首页</div>
								</div>
							</router-link>
							<div>
								<div class="yijicaidan" @click="zhankai(1)">
									<img src="./assets/image/shouye/wuye.png" class="juzhong imgbj">
									<div style="display: inline-block;">智慧物业</div>
								</div>
								<el-collapse-transition>
									<div class="erjicaidan" v-show="erji1">
										<router-link to="/wuye" tag="div">物业缴费</router-link>
										<div>缴费查询</div>
										<div>故障报修</div>
										<div>公告管理</div>
									</div>
								</el-collapse-transition>
							</div>
							<div>
								<div class="yijicaidan" @click="zhankai(2)">
									<img src="./assets/image/shouye/yiliao.png" class="juzhong imgbj">
									<div style="display: inline-block;">社区医疗</div>
								</div>
								<el-collapse-transition>
									<div class="erjicaidan" v-show="erji2">
										<div>预约挂号</div>
										<div>健康小贴士</div>
										<div>医生简介</div>
									</div>
								</el-collapse-transition>
							</div>
							<div>
								<div class="yijicaidan" @click="zhankai(3)">
									<img src="./assets/image/shouye/yingyong.png" class="juzhong imgbj">
									<div style="display: inline-block;">智能应用</div>
								</div>
								<el-collapse-transition>
									<div class="erjicaidan" v-show="erji3">
										<div>
											智能停车
											<div class="zntc">
												<div>车位录入</div>
												<div>车辆管理</div>
												<div>停车记录</div>
											</div>
										</div>
										<div>智能开门</div>
									</div>
								</el-collapse-transition>
							</div>
							<div>
								<div class="yijicaidan" @click="zhankai(4)">
									<img src="./assets/image/shouye/shuju.png" class="juzhong imgbj">
									<div style="display: inline-block;">数据统计</div>
								</div>
								<el-collapse-transition>
									<div class="erjicaidan" v-show="erji4">
										<div>房屋分类统计</div>
										<div>缴费分析统计</div>
									</div>
								</el-collapse-transition>
							</div>
							<div>
								<div class="yijicaidan" @click="zhankai(5)">
									<img src="./assets/image/shouye/xinxi.png" class="juzhong imgbj">
									<div style="display: inline-block;">基本信息</div>
								</div>
								<el-collapse-transition>
									<div class="erjicaidan" v-show="erji5">
										<div>房屋信息</div>
										<div>人口信息</div>
										<div>设备信息</div>
										<div>电子地图</div>
									</div>
								</el-collapse-transition>
							</div>
							<div>
								<div class="yijicaidan" @click="zhankai(6)">
									<img src="./assets/image/shouye/wuye.png" class="juzhong imgbj">
									<div style="display: inline-block;">系统管理</div>
								</div>
								<el-collapse-transition>
									<div class="erjicaidan" v-show="erji6">
										<div>用户管理</div>
										<div>角色管理</div>
										<div>权限管理</div>
									</div>
								</el-collapse-transition>
							</div>
						</div>
					</template>
					<template v-else>
						<div class="center-left" style="width: 3%;">
							<div class="qiehuan">
								<img src="./assets/image/shouye/qiehuan2.png" @click="qiehuan()" width="60%">
							</div>
							<div>
								<div class="yijicaidan">
									<img src="./assets/image/shouye/wuye.png" class="juzhong imgbj" style="width: 60%;">
								</div>
							</div>
							<div>
								<div class="yijicaidan">
									<img src="./assets/image/shouye/yiliao.png" class="juzhong imgbj" style="width: 60%;">
								</div>
							</div>
							<div>
								<div class="yijicaidan">
									<img src="./assets/image/shouye/yingyong.png" class="juzhong imgbj" style="width: 60%;">
								</div>
							</div>
							<div>
								<div class="yijicaidan">
									<img src="./assets/image/shouye/shuju.png" class="juzhong imgbj" style="width: 60%;">
								</div>
							</div>
							<div>
								<div class="yijicaidan">
									<img src="./assets/image/shouye/xinxi.png" class="juzhong imgbj" style="width: 60%;">
								</div>
							</div>
							<div>
								<div class="yijicaidan">
									<img src="./assets/image/shouye/wuye.png" class="juzhong imgbj" style="width: 60%;">
								</div>
							</div>
						</div>
					</template>
					<div class="center-right">
						<keep-alive>
							<router-view></router-view>
						</keep-alive>
					</div>
				</div>
			</div>
		</template>
	</div>
</template>

<script>
	import login from './components/login.vue'
	export default {
		data() {
			return {
				yanse: '#957bfe', //动态改变头部背景颜色
				grzl: false, //个人资料
				hf: false, //换皮肤
				bz: false, //帮助
				dhqiehuan: true, //导航切换
				erji1: false,
				erji2: false,
				erji3: false,
				erji4: false,
				erji5: false,
				erji6: false,
			}
		},
		methods: {
			tuichu() {
				this.$store.state.pddl = true
				localStorage.setItem('zhuser', "")
			},
			erji(zhi) {
				if (zhi == 1) {
					this.grzl = !this.grzl
					this.bz = false
					this.hf = false
				} else if (zhi == 2) {
					this.hf = !this.hf
					this.grzl = false
					this.bz = false
				} else if (zhi == 3) {
					this.bz = !this.bz
					this.grzl = false
					this.hf = false
				}
			},
			qiehuan() {
				this.dhqiehuan = !this.dhqiehuan
			},
			zhankai(zhi) {
				if (zhi == 1) {
					this.erji1 = !this.erji1
				} else if (zhi == 2) {
					this.erji2 = !this.erji2
				} else if (zhi == 3) {
					this.erji3 = !this.erji3
				} else if (zhi == 4) {
					this.erji4 = !this.erji4
				} else if (zhi == 5) {
					this.erji5 = !this.erji5
				} else if (zhi == 6) {
					this.erji6 = !this.erji6
				}
			}
		},
		components: {
			login
		}
	}
</script>

<style lang="scss">
	#app {
		width: 1535px;
	}

	body {
		margin: 0px;
		overflow-x: hidden;
	}

	.nav {
		width: 100%;
		height: 70px;
		color: white;
		line-height: 70px;
		position: relative;
	}

	.nav-center-left {
		margin-left: 1%;
		float: left;
	}

	.nav-center-right {
		width: 30%;
		margin-right: 1%;
		float: right;
	}

	.nav-center-right>div {
		cursor: pointer;
	}

	.nav-center-right>div {
		margin: 0 3%;
	}

	.nav-center>div>div {
		display: inline-block;
	}

	.juzhong {
		vertical-align: middle;
		margin-right: 10px;
	}

	.geren {
		width: 8%;
		position: absolute;
		top: 80%;
		right: 22%;
		line-height: 35px;
		text-align: center;
		background: #957bfe;
		z-index: 5;
	}

	.geren>div {
		font-size: 14px;
		border: 1px solid white;
	}

	.huanfu {
		width: 25%;
		height: 50px;
		position: absolute;
		top: 80%;
		right: 5%;
		background: white;
		border: 1px solid #957bfe;
		z-index: 5;
	}

	.huanfu>div {
		width: 16%;
		margin: 1% 2%;
		height: 40px;
		cursor: pointer;
		display: inline-block;
	}

	.huanfu>div:nth-of-type(1) {
		background: red;
	}

	.huanfu>div:nth-of-type(2) {
		background: #a797e7;
	}

	.huanfu>div:nth-of-type(3) {
		background: #861a9d;
	}

	.huanfu>div:nth-of-type(4) {
		background: #068922;
	}

	.huanfu>div:nth-of-type(5) {
		background: #957bfe;
	}

	.bangzhu {
		position: absolute;
		top: 80%;
		right: 6%;
	}



	// 内容
	.center {
		width: 100%;
		height: 600px;
		display: flex;
		position: relative;
	}

	.center>div {
		flex-direction: column;
	}

	.center-left {
		width: 15%;
		overflow-y: auto;
		height: 675px;
		background: #957bfe;
	}

	.qiehuan {
		padding-right: 5%;
		line-height: 50px !important;
		text-align: right !important;
		box-sizing: border-box;
		cursor: pointer;
		border: 1px solid #957BFF !important;
	}

	.center-left>div {
		width: 100%;
		background: #623BFE;
		color: white;
	}

	// 一级菜单
	.yijicaidan {
		cursor: pointer;
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: left;
		border-bottom: 1px solid #957BFF;
		background: #623BFE;
	}

	// 二级菜单
	.erjicaidan {
		width: 100%;
		font-size: 13px;
		background: #4B71E6;
		text-align: center;
	}

	.erjicaidan>div {
		height: 50px;
		cursor: pointer;
		line-height: 50px;
		border: 1px solid #6174EE;
	}

	.erjicaidan>div:hover {
		background: #CCCCFF;
	}

	.zntc {
		position: absolute;
		top: 42.5%;
		left: 15%;
		color: white;
		width: 150px;
		display: none;
	}
	.erjicaidan>div:first-child:hover>.zntc{
		display: block;
	}
	.zntc>div {
		background:linear-gradient(to right,white,#1F64CF);
		border: 1px solid white;
	}

	.imgbj {
		margin-left: 20%;
		margin-right: 20px;
		width: 10%;
	}



	.center-right {
		width: 84%;
		height: 675px;
		overflow: auto;
	}
</style>
