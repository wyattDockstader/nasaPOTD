<template>
  <Apod />
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { nasaService } from '../services/NasaService'
export default {
  name: 'Home',
  setup() {
    nasaService.getPicture()
    return {
      apod: computed(() => AppState.apod)
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  text-align: center;
  user-select: none;
  > img {
    height: 200px;
    width: 200px;
  }
}
</style>
