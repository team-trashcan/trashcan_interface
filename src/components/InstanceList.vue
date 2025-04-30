<script setup lang="ts">
import InstanceStatus from './instances/InstanceStatus.vue'

const {instances} = defineProps<{ instances: Instance[] }>()

</script>

<template>
  <div class="grid grid-cols-2 gap-2">
    <template v-for="instance in instances" :key="instance">
      <InstanceStatus :instance=instance />
    </template>
  </div>
</template>