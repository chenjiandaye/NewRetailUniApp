<template>
	<view class="container">
		<view class="intro">本项目已包含uni ui组件，无需import和注册，可直接使用。在代码区键入字母u，即可通过代码助手列出所有可用组件。光标置于组件名称处按F1，即可查看组件文档。</view>
		<text class="intro">详见：</text>
		<uni-link :href="href" :text="href"></uni-link>
		<view class="uni-page-head">
			<view class="uni-page-head-title">支付测试,默认支付0.01给uniapp官方</view>
		</view>
		<view class="uni-padding-wrap">
		    <view class="uni-btn-v uni-common-mt">
		        <!-- #ifdef MP-WEIXIN -->
					<button type="primary" @click="weixinPay" :loading="loading">微信支付</button>
		        <!-- #endif -->
		        <!-- #ifdef MP-ALIPAY -->
		            <button type="primary" :loading="loading" @click="aliPay">支付宝支付</button>
		        <!-- #endif -->
		    </view>
		</view>
	</view>
</template>

<script>
	import uniLink from '@/components/uni-link/uni-link.vue';
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui',
				loading: false,
				price: 1
			}
		},
		methods: {
			weixinPay() {
			    console.log("发起支付");
			    this.loading = true;
				uni.login({
					success: (e) => {
						console.log("login success", e);
						uni.request({
							url: `https://unidemo.dcloud.net.cn/payment/wx/mp?code=${e.code}&amount=${this.price}`,
							success: (res) => {
								console.log("pay request success", res);
								if (res.statusCode !== 200) {
									uni.showModal({
										content: "支付失败，请重试！",
										showCancel: false
									});
									return;
								}
								if (res.data.ret === 0) {
									console.log("得到接口prepay_id", res.data.payment);
									let paymentData = res.data.payment;
									uni.requestPayment({
										timeStamp: paymentData.timeStamp,
										nonceStr: paymentData.nonceStr,
										package: paymentData.package,
										signType: 'MD5',
										paySign: paymentData.paySign,
										success: (res) => {
											uni.showToast({
												title: "感谢您的赞助!"
											})
										},
										fail: (res) => {
											uni.showModal({
												content: "支付失败,原因为: " + res
													.errMsg,
												showCancel: false
											})
										},
										complete: () => {
											this.loading = false;
										}
									})
								} else {
									this.loading = false;
									uni.showModal({
										content: res.data.desc,
										showCancel: false
									})
								}
							},
							fail: (e) => {
								console.log("fail", e);
								this.loading = false;
								uni.showModal({
									content: "支付失败,原因为: " + e.errMsg,
									showCancel: false
								})
							}
						})
					},
					fail: (e) => {
						console.log("fail", e);
						this.loading = false;
						uni.showModal({
							content: "支付失败,原因为: " + e.errMsg,
							showCancel: false
						})
					}
				})
			},
			aliPay(){
				console.log('支付宝支付')
			}
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
