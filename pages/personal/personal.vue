<template>
	<view class="personal">
		<view class="info">
			<view class="info_top">
				<view class="left_top">
					<image src="/static/img/demo.jpg" mode="" class="icon_img"></image>
					<view>客服</view>
				</view>
				<view class="left_right">
					<view class="top_btn">
						<image src="@/static/img/demo.jpg" mode="" class="icon_img"></image>
						<view>签到</view>
					</view>
					<view class="top_btn">
						<image src="@/static/img/demo.jpg" mode="" class="icon_img"></image>
						<view>设置</view>
					</view>
				</view>
			</view>
			<view class="info_bottom">
				<view class="left_bottom" @click="previewImage">
					<image src="https://tfsimg.alipay.com/images/partner/TB1_zeHbvyGDuNjmgfSXXcAjFXa" mode="" class="photo"></image>
				</view>
				<view class="right_bottom">
					<view class="user_name">
						{{user_name}}
					</view>
					<view class="motto">
						<text>个性签名：</text>
						<text>{{motto}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data(){
		return{
			user_name:'王大拿',
			motto:'吃喝玩乐'
		}
	},
	methods:{
		previewImage(){
			console.log(1)
			uni.previewImage({
				urls:'https://tfsimg.alipay.com/images/partner/TB1_zeHbvyGDuNjmgfSXXcAjFXa'
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.personal{
	.info{
		position:fixed;
		top: 0;
		left: 0;
		right: 0;
		height: 300rpx;
		background-color: #0099cc;
		color: #fff;
		font-size: 26rpx;
		/* #ifdef H5 */
		top: 88rpx;
		/* #endif */
		.info_top{
			display: flex;
			justify-content: space-between;
			padding: 0 20rpx;
			.left_top,
			.top_btn{
				text-align: center;
				.icon_img{
					width: 40rpx;
					height: 40rpx;
				}
			}
			.top_btn{
				float: left;
				margin-left: 30rpx;
			}
		}
		.info_bottom{
			display: flex;
			align-items: center;
			margin-top: 40rpx;
			padding-left: 40rpx;
			height: 150rpx;
			.left_bottom{
				width: 140rpx;
				height: 140rpx;
				border-radius: 50%;
				overflow: hidden;
				.photo{
					width: 100%;
					height: 100%;
				}
			}
			.right_bottom{
				margin-left: 40rpx;
				line-height: 50rpx;
			}
		}
	}
}
</style>
