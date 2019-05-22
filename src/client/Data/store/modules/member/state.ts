import { IMember } from '@/Data/entities/MemberEntity'

export interface IMemberState {
  list: IMember[]
}

export const initialState = (): IMemberState => {
  return {
    list: []
  }
}
