<script setup lang="ts">
import { computed } from 'vue'
import type { OrderValue } from '@/shared/api'
import {
  IconSort,
  IconSortDown,
  IconSortUp,
} from '@/shared/ui'

const props = defineProps<{
  value?: OrderValue;
}>()

const emit = defineEmits<{
  (e: 'click', value: OrderValue): void;
}>()

const nextValue = computed<OrderValue>(() => {
  if (!props.value) return 'desc'
  else if (props.value === 'desc') return 'asc'

  return ''
})

const click = (value: OrderValue) => emit('click', value)
</script>

<template>
  <span class="flex items-center gap-2 cursor-pointer" @click="click(nextValue)">
    <slot></slot>

    <IconSortUp v-if="value === 'asc'" />
    <IconSortDown v-else-if="value === 'desc'" />
    <IconSort v-else />
  </span>
</template>

<style scoped>

</style>
