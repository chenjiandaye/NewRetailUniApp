<script>
import { mapActions,mapState } from 'vuex'
export default {
	onLaunch: function() {
		console.log('App Launch');
		this.getProvider()
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	},
	computed:{
		...mapState(['provider'])
	},
	methods:{
		...mapActions(['setProvider']),
		getProvider(){
			var _this = this
			uni.getProvider({
				service:'payment',
				success(res) {
					console.log(res)
					if(res.provider.length > 0){
						_this.setProvider(res.provider[0])
					}
				}
			})
		}
	}
};
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
</style>
