<script setup lang="ts">
import {LucideChartNoAxesCombined, LucideClock3, LucideTrash} from 'lucide-vue-next'
import IconTextStat from './IconTextStat.vue'

const {instance} = defineProps<{
  instance: Instance
}>()

const {
  name,
  percentageFill,
  estimatedTimeOfFull,
  usage,
} = instance

function timeToString(date: Date): string {
  const now = new Date()
  const diff = date.getTime() - now.getTime() // Difference in the future
  if (diff <= 0) {
    return "now"
  }

  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (seconds < 60) {
    return `in ${seconds} second${seconds > 1 ? "s" : ""}`
  } else if (minutes < 60) {
    return `in ${minutes} minute${minutes > 1 ? "s" : ""}`
  } else if (hours < 24) {
    return `in ${hours} hour${hours > 1 ? "s" : ""}`
  } else {
    return `in ${days} day${days > 1 ? "s" : ""}`
  }
}

function getColorFromPercentage(percentage: number | undefined): string {
  if (percentage === undefined || percentage === null) {
    return Color.Rosewater
  }
  if (percentage < 75) {
    return Color.Green
  } else if (percentage < 90) {
    return Color.Yellow
  } else {
    return Color.Red
  }
}

function getColorFromTime(time: Date | undefined): string {
  if (time === undefined || time === null) {
    return Color.Rosewater
  }

  if (time.toDateString() === new Date().toDateString()) {
    return Color.Red
  }

  const isSameWeek = (date1: Date, date2: Date): boolean => {
    const d1 = new Date(date1)
    const d2 = new Date(date2)
    d1.setDate(d1.getDate() - d1.getDay())
    d2.setDate(d2.getDate() - d2.getDay())
    return d1.toDateString() === d2.toDateString()
  }

  if (isSameWeek(time, new Date())) {
    return Color.Yellow
  }

  return Color.Green
}

function getColorFromUsage(usage: Usage | undefined): string {
  switch (usage) {
    case 'Very High':
      return Color.Red
    case 'High':
      return Color.Maroon
    case 'Medium':
      return Color.Yellow
    case 'Low':
      return Color.Sapphire
    case 'Very Low':
      return Color.Green
    default:
      return Color.Rosewater
  }
}
</script>

<script lang="ts">

export const Color = {
  Rosewater: "#f5e0dc",
  Flamingo: "#f2cdcd",
  Pink: "#f5c2e7",
  Mauve: "#cba6f7",
  Red: "#f38ba8",
  Maroon: "#eba0ac",
  Peach: "#fab387",
  Yellow: "#f9e2af",
  Green: "#a6e3a1",
  Teal: "#94e2d5",
  Sky: "#89dceb",
  Sapphire: "#74c7ec",
  Blue: "#89b4fa",
  Lavender: "#b4befe",
} as const

</script>

<template>
  <button class="flex flex-col gap-5 rounded-xl items-center p-5">

    <!-- big stats -->
    <div class="flex w-full items-center justify-center gap-5 relative"
         :style="{ color: getColorFromPercentage(percentageFill)}">
      <LucideTrash :size="100"/>
      <h3 class="absolute top-10">
        {{ percentageFill }}
      </h3>
      <!--      <LucideBatteryLow :size="100" class="text-ctp-green"/>-->
    </div>

    <!-- name -->
    <div>
      <span class="font-bold">{{ name }}</span>
    </div>

    <!-- detailed stats -->
    <div class="flex gap-8">

      <IconTextStat :text="usage || 'Unknown'" :color="getColorFromUsage(usage)">
        <template #icon>
          <LucideChartNoAxesCombined/>
        </template>
      </IconTextStat>
      <IconTextStat :text="estimatedTimeOfFull ? timeToString(estimatedTimeOfFull) : 'Unknown'"
                    :color="getColorFromTime(estimatedTimeOfFull)"
      >
        <template #icon>
          <LucideClock3/>
        </template>
      </IconTextStat>

    </div>

  </button>
</template>