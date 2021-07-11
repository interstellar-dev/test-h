<template>
  <circle-button v-if="!moreDetailsIsShown" @click="showMoreDetails()">
    <plus-icon />
  </circle-button>
  <circle-button v-else @click="closeDetails()">
    <minus-icon />
  </circle-button>
  <square-button class="ml-2" text @click="$emit('highlightRow')">
    <span
      :class="['text-sm pa-2', rowIsHighlighted ? 'text-pink-700' : 'text-black']"
    >
      {{ rowIsHighlighted ? 'Отказано' : 'Отказать' }}
    </span>
  </square-button>
</template>

<script>
import CircleButton from '@/components/TableButtons/CircleButton.vue'
import PlusIcon from '@/components/TableIcons/PlusIcon.vue'
import MinusIcon from '@/components/TableIcons//MinusIcon.vue'
import SquareButton from '../../TableButtons/SquareButton.vue'

export default {
  components: {
    PlusIcon,
    CircleButton,
    MinusIcon,
    SquareButton,
  },
  props: {
    moreDetailsIsShown: {
      type: Boolean,
      required: true,
    },
    rowIsHighlighted: {
      type: Boolean,
      required: true,
    },
  },
  emits: {
    showMoreDetails: null,
    closeDetails: null,
    highlightRow: null,
  },
  methods: {
    showMoreDetails() {
      this.$emit('showMoreDetails')
    },
    closeDetails() {
      this.$emit('closeDetails')
    },
  },
}
</script>
