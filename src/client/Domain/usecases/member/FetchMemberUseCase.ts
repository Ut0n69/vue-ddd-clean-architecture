import { MemberApiClient } from '@/Infrastructure/network/api/Member'
import { MemberRepository } from '@/Repositories/MemberRepository'

export interface IFetchMemberUseCase {
  memberApiClient: MemberApiClient
  memberRepository: MemberRepository
}

export class FetchMemberUseCase {
  private memberApiClient: MemberApiClient
  private memberRepository: MemberRepository

  constructor({ memberApiClient, memberRepository }: IFetchMemberUseCase) {
    this.memberApiClient = memberApiClient
    this.memberRepository = memberRepository
  }

  async execute() {
    const response = await this.memberApiClient.fetchMember()
    this.memberRepository.saveMemberData(response)
  }
}
