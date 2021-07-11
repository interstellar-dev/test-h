<template>
  <tr
    :class="{
      'bg-gradient-to-r from-green-400 via-blue-200 to-pink-400': rowIsHighlighted,
    }"
  >
    <td class="px-6 py-4">
      <div class="flex justify-center items-center">
        <main-row-actions
          @showMoreDetails="showMoreDetails()"
          @closeDetails="closeDetails()"
          @highlightRow="highlightRow()"
          :row-is-highlighted="rowIsHighlighted"
          :more-details-is-shown="moreDetailsIsShown"
        />
      </div>
    </td>
    <td class="px-6 py-4">
      <div class="flex items-center">
        <div class="ml-4">
          <div class="text-sm font-medium text-gray-900">
            {{ album.userId }}
          </div>
        </div>
      </div>
    </td>
    <td class="px-6 py-4">
      <div class="text-sm text-center font-medium text-blue-800">
        {{ album.id }}
      </div>
    </td>
    <td colspan="3" class="px-6 py-4 text-sm">
      <span v-html="searchHighlighted(album.title, search)" />
    </td>
  </tr>
</template>

<script>
import { mapGetters } from 'vuex'
import MainRowActions from './MainRowActions.vue'

export default {
  components: {
    MainRowActions,
  },
  props: {
    album: {
      type: Object,
      required: true,
    },
    moreDetailsIsShown: {
      type: Boolean,
      required: true,
    },
  },
  emits: {
    showMoreDetails: null,
    closeDetails: null,
  },
  data() {
    return {
      rowIsHighlighted: false,
    }
  },
  computed: {
    ...mapGetters('albums', ['search']),
  },
  methods: {
    highlightRow() {
      this.rowIsHighlighted = !this.rowIsHighlighted
    },
    showMoreDetails() {
      this.$emit('showMoreDetails')
    },
    closeDetails() {
      this.$emit('closeDetails')
    },
    searchHighlighted(value, search) {
      if (search) {
        return value.replace(
          search,
          `<span class="px-2  p-1/2 bg-yellow-300"> ${search}</span>`
        )
      }
      return value
    },
  },
}
</script>
