<template>
  <tfoot class="bg-gradient-to-r from-gray-500 to-green-600">
    <tr>
      <td colspan="6" class="ml-auto">
        <div class="flex justify-end mr-5">
          <page-pagination />
        </div>
      </td>
    </tr>
  </tfoot>
</template>

<script>
import PagePagination from './PagePagination.vue'

export default {
  components: {
    PagePagination,
  },
}
</script>
