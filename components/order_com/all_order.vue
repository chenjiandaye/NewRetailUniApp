<template>
	<view class="all_order">
		<view v-for="item of list" :key="item.id" class="list_info">
			<view class="list_header">
				<view class="order_id">
					订单编号：<text>{{item.id}}</text>
				</view>
				<view class="order_time">{{item.time}}</view>
			</view>
			<view class="list_container">
				<ul>
					<li v-for="(item1, index1) of item.commodity" :key="index1">
						<text class="left">
							<text class="name_number">{{item1.name}}*{{item1.numbner}}</text>
						</text>
						<text class="right">
							<text>￥</text>
							<text>{{item1.price}}</text>
						</text>
					</li>
				</ul>
			</view>
			<view class="total">
				<text>总计：</text>
				<text class="total_price">￥{{item.totalPrice}}</text>
			</view>
			<view class="footer_btn">
				<button type="default" size="mini" class="sh" @click="shChange">售后</button>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data(){
		return {
			list:[
				{
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
				{
					id:'11223456',
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
				{
					id:'1122789',
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
				{
					id:'11263',
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
				}
			]
		}
	},
	methods:{
		shChange(){
			uni.navigateTo({
				url:"/pages/shDetail/shDetail?id=2"
			})
		}
	}
}
</script>

<style lang="scss">
.all_order {
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
		.footer_btn {
			text-align: right;
			padding-top: 20rpx;
			.sh{
				background: #fdf6ec;
				color: #e6a23c;
				&::after{
					border-color: #f8e5c9;
				}
			}
		}
	}	
}

</style>