<template>
  <a
    aria-current="page"
    :class="[
      'cursor-pointer',
      'z-10',
      'relative',
      'inline-flex',
      'items-center',
      'px-4',
      'py-2',
      'border',
      'text-sm',
      'font-medium',
      'bg-white',
      'border-gray-300',
      'text-gray-500',
      'hover:bg-gray-300',
      {
        'bg-indigo-50 border-indigo-500 text-indigo-600': pageNumber === page,
      },
    ]"
  >
    {{ pageNumber }}
  </a>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    pageNumber: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapGetters('albums', ['page']),
  },
}
</script>
