<script setup lang="ts">
import TobBar from './TobBar.vue';
import InstanceList from './InstanceList.vue';
import HealthStatus from './HealthStatus.vue';

// defineProps<{ msg: string }>()

// const count = ref(0)
// <button type="button" @click="count++">
//   <LucideSearch />
// </button>

</script>

<template>
  <div class="w-[700px] h-[500px] p-2 flex flex-col gap-5
   bg-ctp-mantle border-ctp-surface0 border rounded-2xl">

    <TobBar :path="['Cologne', 'Rheinpark']"/>
    <HealthStatus :amount-error="0" :amount-warning="0"/>
    <InstanceList />

  </div>
</template>

<style scoped></style>
