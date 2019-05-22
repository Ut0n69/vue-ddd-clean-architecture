import Store from '@/Data/store'
import { IMember } from '@/Data/entities/MemberEntity'

export interface IMemberPresenter {
  memberList: IMember[]
}

export function MemberListPresenter(store: typeof Store): IMemberPresenter {
  return {
    memberList: store.state.member.list
  }
}
