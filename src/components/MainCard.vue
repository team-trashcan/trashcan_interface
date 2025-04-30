<script setup lang="ts">
import TobBar from './TobBar.vue';
import InstanceList from './InstanceList.vue';
import HealthStatus from './health/HealthStatus.vue';
import {ref} from "vue";

// defineProps<{ msg: string }>()

// const count = ref(0)
// <button type="button" @click="count++">
//   <LucideSearch />
// </button>

const instances: Instance[] = [
  {
    name: "Prototype",
    percentageFill: 50,
    estimatedTimeOfFull: new Date('2025-02-15T23:59:59'),
    usage: "High"
  },
  {
    name: "Dummy 1",
    percentageFill: 2,
    estimatedTimeOfFull: new Date(new Date().setMonth(new Date().getMonth() + 1)),
    usage: "Very Low"
  },
  {
    name: "Dummy 2",
    percentageFill: 80,
    estimatedTimeOfFull: new Date(new Date().setHours(new Date().getHours() + 12)),
    usage: "Medium"
  },
  {
    name: "Dummy 3",
    percentageFill: 92,
    estimatedTimeOfFull: new Date(new Date().setMinutes(new Date().getMinutes() + 1)),
    usage: "Very High"
  }
]

const amountRed = ref(instances.filter(instance => instance.percentageFill && instance.percentageFill >= 90).length)
const amountYellow = ref(instances.filter(instance => instance.percentageFill && instance.percentageFill >= 75 && instance.percentageFill < 90).length)
</script>

<template>
  <div class="w-[700px] p-2 flex flex-col gap-5
   bg-ctp-mantle border-ctp-surface0 border rounded-2xl">

    <TobBar :path="['Cologne', 'Rheinpark']"/>
    <HealthStatus :amount-error="amountRed" :amount-warning="amountYellow"/>
    <InstanceList :instances="instances"/>

  </div>
</template>

<style scoped></style>
