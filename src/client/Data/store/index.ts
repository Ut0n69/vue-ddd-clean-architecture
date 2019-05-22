import Vue from 'vue'
import Vuex from 'vuex'
import * as member from '@/Data/store/modules/member'

Vue.use(Vuex)

export interface RootState {
  member: member.IMemberState
}

export default new Vuex.Store<RootState>({
  modules: {
    member: member.store
  }
})
