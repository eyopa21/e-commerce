
<script setup>
const emit = defineEmits(['range'])
const minValue = ref(100)
const maxValue = ref(999)

emit('range', minValue, maxValue)

</script>

<template>
    <div class="space-y-2 py-4">
        <div class="flex relative items-center">
            <input id="price-from"
                class="bg-white border rounded-lg max-w-full border-gray-200 leading-none w-auto p-2 pl-6 md:text-sm"
                type="number" placeholder="From" min="0" />
            <label for="price-from" class="leading-none px-2 text-gray-400 absolute">€</label>
        </div>
        <div class="p-1">
            <URange v-model="minValue" :min="50" :max="500" name="range" />
        </div>


        <div class="p-1">
            <URange v-model="maxValue" name="range" :min="500" :max="999" />
        </div>

        <div class="flex relative items-center">
            <input id="price-to"
                class="bg-white border rounded-lg max-w-full border-gray-200 leading-none w-auto p-2 pl-6 md:text-sm"
                type="number" placeholder="Up to" min="1" />
            <label for="price-to" class="leading-none px-2 text-gray-400 absolute">€</label>
        </div>
    </div>
</template>