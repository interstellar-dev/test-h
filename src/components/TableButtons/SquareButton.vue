<template>
  <button
    :class="[
      'p-2',
      'flex',
      'items-center',
      'bg-gray-100',
      'text-blue-50',
      'max-w-max',
      'shadow-sm',
      'duration-200',
      'hover:bg-gray-400 hover:shadow-lg',
      'active:shadow-lg active:bg-gray-600',
      'rounded-md',
      {
        'w-10 h-10': !text,
      },
    ]"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    text: Boolean,
  },
}
</script>
