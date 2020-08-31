<template>
	<view class="order_container">
		<view class="header_tabs">
			<v-tabs
				v-model="current" 
				:tabs="tabs" 
				@change="changeTab"
				color="#fff"
				:bold="false"
				height="100rpx"
				bgColor="#0099cc"
				activeColor="#fff"
				lineColor="#fff"
			></v-tabs>
		</view>
		
		<view class="container-tabs__list">
			<swiper class="container-tabs__swiper" :current="current" @change="changeSwiper">
				<swiper-item>
					<scroll-view :scroll-y="true" style="height: 100%;">
						<allOrder></allOrder>
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view :scroll-y="true" style="height: 100%;">
						22
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view :scroll-y="true" style="height: 100%;">
						33
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view :scroll-y="true" style="height: 100%;">
						44
					</scroll-view>
				</swiper-item>
			</swiper>
		</view> 
	</view>
</template>  
<script>
import vTabs from '@/components/v-tabs/v-tabs.vue'
import allOrder from '@/components/order_com/all_order.vue'

export default {
    data(){
        return{
			current: 0,
			tabs: [
				'全部',
				'已支付',
				'未支付',
				'售后'
			],
        }
    },
    methods:{
        changeSwiper(e) {
          this.current = e.detail.current
        },
		changeTab(index) {
			// console.log('当前选中的项：' + index)
			this.current = index
			console.log(this.current)
		},
    },
    components:{
		allOrder,
		vTabs
    }
}
	
</script>

<style lang="scss" scoped>
.order_container{
	.header_tabs{
		position: fixed;
		top: 0;
		z-index: 999;
		/* #ifdef H5 */
		position: relative;
		width: 100%;
		height: 100rpx;
		/* #endif */
	}
	.container-tabs__list {
		padding-top: 100rpx;
		/* #ifdef H5 */
		padding-top: 0;
		/* #endif */
		.container-tabs__swiper{
			height: calc(100vh - 100rpx);
			background-color: #fff;
		}
	}
}
</style>