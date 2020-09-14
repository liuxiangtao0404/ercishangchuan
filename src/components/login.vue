<template>
	<div class="denglu">
		<div class="xinxi">
			<h1>XXX智慧社区管理系统</h1>
			<div class="dlxinxi">
				<div>
					<el-image src="https://s1.ax1x.com/2020/08/25/d6eGnO.png"></el-image>
				</div>
				<div>
					<div>
						<el-input v-model="user" placeholder="请输入用户名"></el-input>
					</div>
					<div>
						<el-input placeholder="请输入密码" v-model="pwd" show-password></el-input>
					</div>
					<div style="text-align: right;">
						<el-checkbox v-model="checked">记住密码</el-checkbox>
					</div>
					<div>
						<el-button type="primary" round style="width: 100%" @click="denglu()">登录</el-button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"login",
		data(){
			return{
				user: "",
				pwd: "",
				checked: false,
			}
		},
		methods:{
			denglu() {
				if (this.user != "") {
					if (this.pwd != "") {
						this.$store.state.pddl = false
						localStorage.setItem('zhuser', this.user)
						this.$store.state.username = localStorage.getItem('zhuser')
					} else {
						this.$message('密码不能为空');
					}
				} else {
					this.$message('账号不能为空');
				}
			},
		},
		created() {
			this.$store.state.username = localStorage.getItem('zhuser')
			if (this.$store.state.username == null || this.$store.state.username == "") {
				this.$store.state.pddl = true
			} else {
				this.$store.state.pddl = false
			}
		}
	}
</script>

<style scoped>
	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 200px;
		min-height: 400px;
	}
	.denglu {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: url(../assets/image/denglu/dlbj.png) 0px 0px no-repeat;
		background-size: cover;
	}
	
	.xinxi {
		width: 40%;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
	
	.xinxi>h1 {
		text-align: center;
		color: white;
		margin: 2% 0;
	}
	
	.xinxi>.dlxinxi {
		width: 100%;
		height: 300px;
		background: white;
		border-radius: 20px;
		display: flex;
	}
	
	.xinxi>.dlxinxi>div:nth-of-type(1) {
		border-right: 1px solid #3f9bde;
		padding-top: 5%;
		width: 40%;
		flex-direction: column;
	}
	
	.xinxi>.dlxinxi>div:nth-of-type(2) {
		width: 50%;
		padding-left: 5%;
		padding-top: 8%;
		box-sizing: border-box;
		border-left: 1px solid #9fcdef;
	}
	
	.xinxi>.dlxinxi>div:nth-of-type(2)>div {
		line-height: 50px;
	}
</style>
