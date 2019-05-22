import { Ajax } from '@/Infrastructure/network/Ajax'
import { AjaxRequest } from '@/Infrastructure/network/AjaxRequest'
import { IMember } from '@/Data/entities/MemberEntity'

export class MemberApiClient {
  async fetchMember(): Promise<IMember> {
    const request: AjaxRequest = {
      path: '/',
      params: '',
      data: {}
    }
    return await Ajax.shared.get(request).then((data: any) => data)
  }
}
