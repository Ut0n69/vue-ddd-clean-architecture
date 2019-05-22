<template>
  <div>
    <h1>MemberLIst</h1>
    <template v-if="presenter.memberList.length">
      <MemberCard
        v-for="(memberData, index) of presenter.memberList"
        :key="index"
        :memberData="memberData"
      />
    </template>
    <p v-else>
      No Member
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MemberListPresenter, IMemberPresenter } from '@/Presentation/presenter/MemberListPresenter'
import MemberCard from '@/Presentation/view/components/modules/MemberCard/MemberCard.vue'
import { FetchMemberUseCase } from '@/Domain/usecases/member/FetchMemberUseCase'
import { MemberApiClient } from '@/Infrastructure/network/api/Member'
import { MemberRepository } from '@/Repositories/MemberRepository'

export default Vue.extend({
  components: {
    MemberCard
  },
  computed: {
    presenter(): IMemberPresenter {
      return MemberListPresenter(this.$store)
    }
  },
  created() {
    this.fetchMember()
  },
  methods: {
    fetchMember() {
      const usecase = new FetchMemberUseCase({
        memberApiClient: new MemberApiClient(),
        memberRepository: new MemberRepository(this.$store)
      })
      usecase.execute()
    }
  }
})
</script>
