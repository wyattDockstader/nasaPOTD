<template>
  <div class="container-fluid bg-dark text-light">
    <div class="row">
      <div class="col-8 p-3" v-if="state.pic">
        <img :src="apod.url" alt="this broken man">
      </div>
      <div class="col-4 p-3" v-if="state.pic">
        <h3>{{ apod.title }}</h3>
        <p>{{ apod.explination }}</p>
      </div>
    </div>
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
