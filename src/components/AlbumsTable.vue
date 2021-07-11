<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <table-thead />
            <table-tbody v-if="hasAlbums" :albums="paginatedAlbums" />
            <table-is-empty v-else />
            <table-footer />
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import TableThead from './TableThead.vue'
import TableIsEmpty from './TableIsEmpty.vue'
import TableTbody from './TableTbody/Index.vue'
import TableFooter from './TableFooter/Index.vue'

export default {
  components: {
    TableThead,
    TableTbody,
    TableFooter,
    TableIsEmpty,
  },
  computed: {
    ...mapGetters('albums', ['paginatedAlbums']),
    hasAlbums() {
      return this.paginatedAlbums.length > 0
    },
  },
}
</script>
