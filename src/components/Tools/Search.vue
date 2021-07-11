<template>
  <div class="mt-7 mr-2 relative rounded-md">
    <div class="flex">
      <input
        v-model="searchField"
        type="text"
        name="price"
        id="price"
        class="
          focus:ring-indigo-500 focus:border-indigo-500
          ml-auto
          pl-7
          pr-12
          sm:text-sm
          border-gray-300
          rounded-md
          w-40
        "
        placeholder="search..."
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('albums', ['setSearch']),
  },
  computed: {
    ...mapGetters('albums', ['search']),
    searchField: {
      get() {
        return this.search
      },
      set(value) {
        this.setSearch(value)
      },
    },
  },
}
</script>
