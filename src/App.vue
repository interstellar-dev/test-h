<template>
  <div class="bg-gray-600 min-h-screen">
    <div class="container mx-auto py-12 max-w-4xl">
      <albums-table v-if="isLoading" />
      <app-spiner v-else />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import AlbumsTable from '@/components/AlbumsTable.vue'
import AppSpiner from './components/Tools/AppSpiner.vue'

export default {
  components: {
    AlbumsTable,
    AppSpiner,
  },
  computed: {
    ...mapGetters('app', ['isLoading']),
  },
  methods: {
    ...mapActions('app', ['initialApp']),
  },
  created() {
    this.initialApp()
  },
}
</script>
