<template>
  <thead class="bg-gradient-to-r from-gray-500 to-green-600">
    <tr>
      <th colspan="6">
        <div class="flex justify-end mr-5">
          <search />
          <sort />
        </div>
      </th>
    </tr>
    <tr>
      <th
        v-for="(header, idx) in headers"
        :key="idx"
        scope="col"
        class="
          px-6
          py-3
          text-left text-xs
          font-medium
          text-white
          uppercase
          tracking-wider
        "
      >
        <span v-if="header.show">
          {{ header.name }}
        </span>
      </th>
    </tr>
  </thead>
</template>

<script>
import Search from './Tools/Search.vue'
import Sort from './Tools/Sort.vue'

export default {
  components: { Search, Sort },
  data() {
    return {
      headers: [
        {
          name: 'Action',
          show: false,
        },
        {
          name: 'User id',
          show: true,
        },
        {
          name: 'Album id',
          show: true,
        },
        {
          name: 'Title',
          show: true,
        },
      ],
    }
  },
}
</script>
