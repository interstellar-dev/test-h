<template>
  <a
    :class="[
      'cursor-pointer',
      'relative',
      'inline-flex',
      'items-center',
      'px-2',
      'py-2',
      'border',
      'text-sm',
      'font-medium',
      'bg-white',
      'border-gray-300',
      'text-gray-500',
      'hover:bg-gray-300',
      prev ? 'rounded-l-md' : 'rounded-r-md',
    ]"
  >
    <ChevronLeftIcon v-if="prev" class="h-5 w-5" aria-hidden="true" />
    <ChevronRightIcon v-else class="h-5 w-5" aria-hidden="true" />
  </a>
</template>

<script>
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/solid'

export default {
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
  },
  props: {
    prev: Boolean,
  },
}
</script>
