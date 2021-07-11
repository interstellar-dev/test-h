<template>
  <tbody class="bg-white divide-y divide-gray-200">
    <table-row v-for="album in albums" :album="album" :key="album.id" />
  </tbody>
</template>

<script>
import TableRow from './TableRow.vue'

export default {
  components: { TableRow },
  props: {
    albums: {
      validator: (prop) => typeof prop === 'object' || Array.isArray(prop),
      required: true,
    },
  },
}
</script>
