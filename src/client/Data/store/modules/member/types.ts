import { IMember } from '@/Data/entities/MemberEntity'

export enum Types {
  FETCH_MEMBER = 'member/fetch_member'
}

export class FetchMember implements FluxStandardAction {
  public type = Types.FETCH_MEMBER
  constructor(public payload: IMember) {}
}
