<template>
	<view class="container">
		<view class="intro">本项目已包含uni ui组件，无需import和注册，可直接使用。在代码区键入字母u，即可通过代码助手列出所有可用组件。光标置于组件名称处按F1，即可查看组件文档。</view>
		<text class="intro">详见：</text>
		<uni-link :href="href" :text="href"></uni-link>
		<navigator url="../login/login">login-navigator</navigator>
		<u-cell-group>
				<u-cell-item icon="setting-fill" title="个人设置">个人设置</u-cell-item>
				<u-cell-item icon="integral-fill" title="会员等级" value="新版本">会员等级</u-cell-item>
			</u-cell-group>
	</view>
</template>

<script>
	import uniLink from '@/components/uni-link/uni-link.vue';
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui'
			}
		},
		methods: {

		},
		components:{
			uniLink
		}
	}
</script>

<style>
	.container {
		padding: 40rpx;
		font-size: 48rpx;
		line-height: 48rpx;
	}
</style>
