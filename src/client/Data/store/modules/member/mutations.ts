import { MutationTree } from 'vuex'
import { IMemberState } from './state'
import { Types, FetchMember } from './types'

export const mutations: MutationTree<IMemberState> = {
  [Types.FETCH_MEMBER]: (state, action: FetchMember) => {
    state.list.push(action.payload)
  }
}
