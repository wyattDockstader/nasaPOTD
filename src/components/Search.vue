<template class="d-block">
  <form @submit.prevent="findMovies">
    <div>
      <input type="date"
             date-date=""
             date-date-format="YYYY MM DD"
             class="form-control"
             placeholder="date"
             v-model="state.query"
      >
      <button type="submit"
              class="btn"
              :disabled="!state.query"
      >
        Search
      </button>
    </div>
  </form>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { AppState } from '../AppState'
import { nasaService } from '../services/NasaService'
export default {
  setup() {
    const state = reactive({
      query: ''
    })

    return {
      state,
      findApodAtDate() {
        AppState.currentQuery = state.query
        nasaService.findApodAtDate()
        state.query = ''
      }
    }
  }

}
</script>

<style>

</style>
