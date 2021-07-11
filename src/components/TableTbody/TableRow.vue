<template>
  <main-row-information
    :album="album"
    @showMoreDetails="showMoreDetails()"
    @closeDetails="closeMoreDetails()"
    :more-details-is-shown="moreDetailsIsShown"
  />
  <more-details :albumId="album.id" v-if="moreDetailsIsShown" />
</template>

<script>
import MainRowInformation from './MainRowInformation/Index.vue'
import MoreDetails from './MoreDetails/Index.vue'

export default {
  components: { MainRowInformation, MoreDetails },
  props: {
    album: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      moreDetailsIsShown: false,
    }
  },
  methods: {
    showMoreDetails() {
      this.moreDetailsIsShown = true
    },
    closeMoreDetails() {
      this.moreDetailsIsShown = false
    },
  },
}
</script>
