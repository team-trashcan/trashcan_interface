<script setup lang="ts">
import { LucideCircleAlert, LucideThumbsUp, LucideTriangleAlert } from 'lucide-vue-next';

defineProps<{
    status: 'Error' | 'Warning' | 'Ok',
    amount?: number,
}>()

</script>

<template>
    <div class="flex w-full h-[52px] rounded-xl text-ctp-base items-center" :class="{
        'bg-ctp-green': status === 'Ok',
        'bg-ctp-peach': status === 'Warning',
        'bg-ctp-red': status === 'Error'
    }">
        <div class="m-3 absolute">
            <LucideThumbsUp v-if="status === 'Ok'" />
            <LucideTriangleAlert v-if="status === 'Warning'" />
            <LucideCircleAlert v-if="status === 'Error'" />
        </div>

        <p class="flex-grow text-center font-semibold">
            {{ status === 'Ok' ? 'Everything is fine!'
            : status === 'Warning' ? `${amount} trashcans are nearly full!`
                : `${amount} trashcans are full!` }}
        </p>
    </div>
</template>