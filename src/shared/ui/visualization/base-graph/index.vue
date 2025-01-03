<script setup lang="ts">
import { computed } from 'vue'
import type { NumberString } from '@/shared/api'
import { CanvasSize } from '@/shared/config'
import { drawGraph, initData } from './config'

type Props = {
  color: string;
  data: NumberString[];
  width?: number;
  height?: number;
}
const props = withDefaults(defineProps<Props>(), CanvasSize.Small)

const data = computed(() => initData(props.data))
const src = computed(() => drawGraph({
  color: props.color,
  width: props.width,
  height: props.height,
  data: data.value,
}))

</script>

<template>
  <img v-if="src" :src="src" />
</template>

<style scoped>

</style>
