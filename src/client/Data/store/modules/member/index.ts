import { Module } from 'vuex'
import { RootState } from '@/Data/store'
import { initialState, IMemberState } from './state'
import { mutations } from './mutations'

export * from './state'

export const store: Module<IMemberState, RootState> = {
  state: initialState,
  mutations
}
