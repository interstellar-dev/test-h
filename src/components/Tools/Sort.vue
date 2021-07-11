<template>
  <div class="my-3 mr-2 relative rounded-md">
    <div class="pl-3 text-xs text-left text-white">Sort by</div>
    <div class="flex">
      <select
        v-model="sortBy"
        class="
          focus:ring-indigo-500 focus:border-indigo-500
          block
          mr-1
          ml-2
          pr-10
          sm:text-sm
          border-gray-300
          rounded-md
        "
      >
        <option v-for="(option, idx) in options" :key="idx" :value="option">
          {{ option.label }}
        </option>
      </select>
      <square-button @click="changeSortDirection()">
        <arrow-icon :sort-direction="sortDirection" />
      </square-button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import SquareButton from '../TableButtons/SquareButton.vue'
import ArrowIcon from '../TableIcons/ArrowIcon.vue'

export default {
  components: { SquareButton, ArrowIcon },
  data() {
    return {
      options: [
        { label: 'User id', value: 'userId' },
        { label: 'Album id', value: 'id' },
        { label: 'Title', value: 'title' },
      ],
    }
  },
  computed: {
    ...mapState('albums', ['sortDirection']),
    sortBy: {
      get() {
        return this.options[0]
      },
      set({ value }) {
        this.setSortBy(value)
      },
    },
  },
  methods: {
    ...mapActions('albums', ['setSortBy', 'setSortDirection']),
    changeSortDirection() {
      return this.sortDirection === 'ASC'
        ? this.setSortDirection('DESC')
        : this.setSortDirection('ASC')
    },
  },
}
</script>
