<script setup lang="ts">
import HealthMessage from './HealthMessage.vue';

defineProps<{
    amountWarning: number,
    amountError: number,
}>()
</script>

<template>
    <div v-if="amountError === 0 && amountWarning === 0">
        <HealthMessage status="Ok"/>
    </div>

    <div class="flex gap-5">
        <HealthMessage v-if="amountError > 0" status="Error" :amount="amountError"/>
        <HealthMessage v-if="amountWarning > 0" status="Warning" :amount="amountWarning"/>
    </div>
</template>