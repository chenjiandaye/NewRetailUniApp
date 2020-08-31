<template>
	<view class="sh_detail">
		<view class="list_info">
			<view class="list_header">
				<view class="order_id">
					订单编号：<text>{{data.id}}</text>
				</view>
				<view class="order_time">{{data.time}}</view>
			</view>
			<view class="list_container">
				<ul>
					<li v-for="(item, index) of data.commodity" :key="index">
						<text class="left">
							<text class="name_number">{{item.name}}*{{item.numbner}}</text>
						</text>
						<text class="right">
							<text>￥</text>
							<text>{{item.price}}</text>
						</text>
					</li>
				</ul>
			</view>
			<view class="total">
				<text>总计：</text>
				<text class="total_price">￥{{data.totalPrice}}</text>
			</view>
		</view>
		<view class="question">
			<view class="txt">问题描述：</view>
			<textarea
				:value="description"
				class="area"
			></textarea>
		</view>
		<view class="image_upload">
			<view class="txt">图片上传：</view>
			<u-upload :action="action" :file-list="fileList" ></u-upload>
		</view>
		<view class="footer_btn">
			<button type="default" size="mini" class="cancel" @click="backPage()">取消</button>
			<button type="default" size="mini" class="ok">确认</button>
		</view>
	</view>
</template>

<script>
export default {
	onLoad(options) {
	    console.log(options)
    },
	data(){
		return{
			data:{
				id:'11223455',
				time:'2020/08/19 09:56:00',
				commodity:[
					{
						name:'百事可乐（听装）330ml',
						numbner:'2',
						price: '2.2'
					},
					{
						name:'农夫山泉茶派(2019新包装组图)500ml',
						numbner:'1',
						price: '2'
					}
				],
				totalPrice: '4.2'
			},
			description:'',
			// 演示地址，请勿直接使用
			action: 'http://5544',
			fileList: []
		}
	},
	methods:{
		backPage(){
			uni.navigateBack({
				delta:1
			})
		}
	}
}
</script>

<style lang="scss">
.sh_detail {
	// background-color: #fff;
	font-size: 26rpx;
	.list_info{
		margin: 0 20rpx;
		padding: 15rpx 0;
		border-bottom: 1px solid #cccccc;
		.list_header{
			display: flex;
			justify-content: space-between;
		}
			
		.list_container{
			ul{
				padding: 40rpx 0;
				li{
					display: flex;
					justify-content: space-between;
					line-height: 48rpx;
				}				
			}
		}
		.total{
			text-align: right;
			.total_price{
				font-weight: 700;
			}
		}
	}
	.question,
	.image_upload{
		padding: 0 20rpx;
		.txt{
			padding: 20rpx 0;
		}
		.area {
			width: 100%;
			height: 200rpx;
			border: 1px solid #ccc;
			box-sizing: border-box;
		}
	}
	.footer_btn{
		display: flex;
		justify-content: center;
		padding: 80rpx 0;
		.cancel,
		.ok{
			margin: 0;
			border-radius: 6rpx;
			width: 120rpx;
			height: 55rpx;
			line-height: 55rpx;
		}
		.cancel{
			margin-right: 40rpx;
		}
		.ok{
			background-color: #409eff;
			color: #fff;
			&::after{
				border: 0;
			}
		}
	}
}

</style>
