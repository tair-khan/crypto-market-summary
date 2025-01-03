<script setup lang="ts">
import type { CurrencyItemLite } from '@/shared/api'
import { Mime } from '@/shared/config'
import { $utils } from '@/shared/lib'

defineProps<{
  item?: CurrencyItemLite;
}>()

</script>

<template>
  <div class="flex items-center">
    <div class="mr-2 w-6 h-6">
      <img
        v-if="item?.icon"
        class="w-full h-full"
        :src="$utils.toDataURL(Mime.SvgXml, item.icon)"
        :alt="item?.code ?? ''"
      />
    </div>

    <span>
      <slot></slot>
    </span>
  </div>
</template>

<style scoped>

</style>
