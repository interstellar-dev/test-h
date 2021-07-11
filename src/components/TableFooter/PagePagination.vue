<template>
  <nav
    class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px py-3"
    aria-label="Pagination"
  >
    <paginate-arrow-button prev @click="toPrevPage()" />
    <paginate-page-button :page-number="1" @click="toPage(1)" />
    <paginate-page-button v-if="middleButtonIsShown" :page-number="page" />
    <paginate-page-button :page-number="lastPage" @click="toPage(lastPage)" />
    <paginate-arrow-button @click="toNextPage()" />
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import PaginatePageButton from './PaginatePageButton.vue'
import PaginateArrowButton from './PaginateArrowButton.vue'

export default {
  components: {
    PaginatePageButton,
    PaginateArrowButton,
  },
  computed: {
    ...mapGetters('albums', [
      'page',
      'startIndex',
      'endIndex',
      'hasNextPage',
      'lastPage',
      'middleButtonIsShown',
    ]),
  },
  methods: {
    ...mapActions('albums', ['setPage']),

    toNextPage() {
      if (this.hasNextPage) {
        this.setPage(this.page + 1)
      }
    },
    toPrevPage() {
      if (this.page > 1) {
        this.setPage(this.page - 1)
      }
    },
    toPage(pageNumber) {
      this.setPage(pageNumber)
    },
  },
}
</script>
