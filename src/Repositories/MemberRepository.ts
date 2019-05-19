import Store from '@/Data/store'
import { FetchMember } from '@/Data/store/modules/member/types'
import { IMember } from '@/Data/entities/MemberEntity'

export class MemberRepository {
  private _store: typeof Store

  constructor(store: typeof Store) {
    this._store = store
  }

  saveMemberData(member: IMember) {
    this._store.commit(new FetchMember(member))
  }
}
