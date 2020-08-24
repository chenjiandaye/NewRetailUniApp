<template>
	<view class="login">
		<view class="inputBox">
			<u-form 
				:model="loginform" 
				ref="lForm"
				:border-bottom="false"
				class="loginInfoForm"
			>
				<u-form-item label="账号:" prop="name" label-width="80rpx" :label-style="labelStyle">
					<u-input 
						v-model="loginform.name" 
						type="text"
						:border="true" 
						placeholder="请输入账号" 
						border-color="#fff"
						class="inputTxt"
						:custom-style="inputStyle"
					/>
				</u-form-item>
				<u-form-item label="密码:" prop="password" label-width="80rpx" :label-style="labelStyle">
					<u-input 
						v-model="loginform.password"
						type="password"
						:border="true" 
						:password-icon="true" 
						placeholder="请输入密码" 
						border-color="#fff"
						class="inputTxt"
						:custom-style="inputStyle"
					/>
				</u-form-item>
			</u-form>
			<u-button 
				@click="loginChange"
				type="primary"
				:custom-style="loginBtn"
			>登录</u-button>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		data() {
			return {
				loginform:{
					name: '',
					password: ''
				},
				loginBtn:{
					'margin': '100rpx auto 0',
					'width': '300rpx'
				},
				labelStyle:{
					'color': '#fff'
				},
				inputStyle:{
					'background-color': '#fff',
					'padding': '0 10px'
				},
				rules: {
					name: [
						{ 
							required: true, 
							message: '请输入姓名', 
							// 可以单个或者同时写两个触发验证方式 
							trigger: ['change','blur'],
						}
					],
					password: [
						{
							required: true,
							message: '请输入密码', 
							trigger: ['change','blur'],
						}
					]
				}
			}
		},
		methods:{
			loginChange(){
				this.linkChange()
			},
			linkChange(){
				uni.switchTab({
					url:"/pages/index/index",
					complete(data){
						console.log(data)
					}
				})
			}
		},
	// 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
		onReady() {
			this.$refs.lForm.setRules(this.rules);
		}
	}
</script>

<style lang="stylus">
.login
	position relative
	background #409eff
	width 100vw
	height 100vh
	.inputBox
		position absolute
		left 50%
		top 20%
		transform translateX(-50%)
		width 600rpx
		.u-input
			padding 0 !important
			background #fff
		>>> .u-input__right-icon
			background #fff
			padding-right 10px
</style>
