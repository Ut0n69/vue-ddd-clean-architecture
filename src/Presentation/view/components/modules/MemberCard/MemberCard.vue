<template>
  <div>
    <p>{{ memberData.name }}</p>
    <p>{{ memberData.age }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IMember } from '@/Data/entities/MemberEntity'

export default Vue.extend({
  name: 'MemberCard',
  props: {
    memberData: {
      type: Object as () => IMember,
      required: true
    }
  }
})
</script>
