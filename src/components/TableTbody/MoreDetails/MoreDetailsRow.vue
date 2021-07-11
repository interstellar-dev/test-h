<template>
  <div
    :class="[
      'px-4',
      'py-5',
      'sm:grid',
      'sm:grid-cols-3',
      'sm:gap-4',
      'sm:px-6',
      {
        'bg-gray-100': darkRow,
        'bg-white': !darkRow,
      },
    ]"
  >
    <dt class="text-sm font-medium text-gray-500">
      <slot name="title" />
    </dt>
    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
      <slot name="content" />
    </dd>
  </div>
</template>

<script>
export default {
  props: {
    darkRow: Boolean,
  },
}
</script>
