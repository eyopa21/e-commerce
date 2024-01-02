<script setup>
const isOpen = ref(true)
</script>


<template>
    <div>
        <div class="flex font-semibold mt-8 leading-none justify-between items-center" @click="isOpen = !isOpen">
            <span>Sale Products Only</span>
            <Icon name="ion:chevron-down-outline" class="transform" :class="isOpen ? 'rotate-180' : ''" />
        </div>
        <div v-if="isOpen" class="mt-3 mr-1 max-h-[240px] grid gap-1 overflow-auto custom-scrollbar">
            <div class="flex gap-2 items-center">
                <label for="sale-true" class="cursor-pointer m-0 text-sm sr-only" aria-label="Only show products on sale">
                    Only show products on sale</label>
                <input id="sale-true" type="checkbox" :value="true" aria-label="Sale Products Only"
                    @click="checkboxClicked" />
            </div>
        </div>
    </div>
</template>