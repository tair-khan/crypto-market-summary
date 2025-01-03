<script setup lang="ts" generic="T">

defineProps<{
  data: T[];
}>()

</script>

<template>
  <table>
    <thead>
      <tr>
        <th>#</th>
        <slot name="head"></slot>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(item, index) in data" :key="index">
        <td>{{ index + 1 }}</td>
        <slot name="body" v-bind="item"></slot>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>

</style>
