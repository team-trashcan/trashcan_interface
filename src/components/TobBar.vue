<script setup lang="ts">
import { LucideLeaf, LucideMenu, LucidePlus, LucideSearch } from 'lucide-vue-next';

defineProps<{ path: string[] }>()

</script>

<template>
    <div class="flex justify-between items-center">
        <!-- left -->
        <div>
            <button type="button">
                <LucideMenu />
            </button>
        </div>

        <!-- center -->
        <ul class="flex gap-2 items-center ml-auto mr-auto absolute left-1/2 -translate-x-1/2">
            <li v-for="(item, index) in path" :key="index" class="flex gap-2 items-center"
                :class="{ 'opacity-50': index === 0 }">

                <span v-if="index !== 0">/</span>
                <span class="flex items-center gap-1">
                    <LucideLeaf v-if="index === path.length - 1" :size="18" />
                    {{ item }}
                </span>
            </li>
        </ul>

        <!-- right -->
        <div>
            <button type="button">
                <LucidePlus />
            </button>
            <button type="button">
                <LucideSearch />
            </button>
        </div>
    </div>
</template>