<template>
  <tr class="bg-green-300">
    <td colspan="6">
      <div class="border-t border-gray-200">
        <dl>
          <more-details-row>
            <template #title> Album id </template>
            <template #content>
              {{ details.albumId }}
            </template>
          </more-details-row>

          <more-details-row dark-row>
            <template #title> Photo id </template>
            <template #content>
              {{ details.id }}
            </template>
          </more-details-row>

          <more-details-row>
            <template #title> Title </template>
            <template #content>
              {{ details.title }}
            </template>
          </more-details-row>

          <more-details-row dark-row>
            <template #title> Url </template>
            <template #content>
              {{ details.url }}
            </template>
          </more-details-row>

          <more-details-row>
            <template #title> Thumbnail Url </template>
            <template #content>
              {{ details.thumbnailUrl }}
            </template>
          </more-details-row>
        </dl>
      </div>
    </td>
  </tr>
</template>

<script>
import { mapGetters } from 'vuex'

import MoreDetailsRow from './MoreDetailsRow.vue'

export default {
  components: { MoreDetailsRow },
  props: {
    albumId: {
      type: [Number, String],
      required: true,
    },
  },
  computed: {
    ...mapGetters('photos', ['getPhotoByAlbumId']),

    details() {
      return this.getPhotoByAlbumId(this.albumId)
    },
  },
}
</script>
