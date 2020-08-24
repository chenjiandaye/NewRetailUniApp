import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		provider:''
	},
	mutations:{
		SET_PROVIDER(state,val){
			state.provider = val
		}
	},
	actions:{
		setProvider({commit, state},val){
			commit('SET_PROVIDER',val)
		}
	}
})

export default store