<script setup lang="ts">

defineProps<{
  text: string,
  color: string,
}>()

</script>

<template>
  <div class="flex flex-col gap-3 justify-center items-center" :style="{ color: color }">
    <slot name="icon"></slot>
    <span>{{ text }}</span>
  </div>
</template>