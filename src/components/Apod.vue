<template>
  <div v-if="state.pic">
    <img :src="apod.url" alt="this broken man">
  </div>
</template>
<script>
import { computed, reactive } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  setup() {
    const state = reactive({
      pic: computed(() => AppState.apod)
    })
    return {
      state,
      apod: computed(() => AppState.apod)
    }
  }
}
</script>
