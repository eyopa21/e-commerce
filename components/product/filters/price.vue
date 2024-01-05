
<script setup>
const emit = defineEmits(['range'])
const isOpen = ref(false)
const minValue = ref(100)
const maxValue = ref(999)

emit('range', minValue, maxValue)
</script>

<template>
    <div>
        <div class="cursor-pointer flex font-semibold mt-8 leading-none justify-between items-center"
            @click="isOpen = !isOpen">
            <span>Price</span>
            <Icon name="ion:chevron-down-outline" class="transform transition-all duration-200"
                :class="isOpen ? 'rotate-180' : ''" />
        </div>
        <Transition name="drop-down" mode="out-in">
            <div v-show="isOpen" class="mt-3 space-y-1">


                <div class="flex relative items-center">
                    <input v-model="minValue" id="price-from"
                        class="bg-white border rounded-lg max-w-full border-gray-200 leading-none w-auto p-2 pl-6 md:text-sm"
                        type="number" placeholder="From" min="0" />
                    <label for="price-from" class="leading-none px-2 text-gray-400 absolute">$</label>
                </div>
                <div class="p-1">
                    <URange v-model="minValue" :min="50" :max="500" name="range" />
                </div>




                <div class="flex relative items-center">
                    <input v-model="maxValue" id="price-to"
                        class="bg-white border rounded-lg max-w-full border-gray-200 leading-none w-auto p-2 pl-6 md:text-sm"
                        type="number" placeholder="Up to" min="1" />
                    <label for="price-to" class="leading-none px-2 text-gray-400 absolute">$</label>
                </div>
                <div class="p-1">
                    <URange v-model="maxValue" name="range" :min="500" :max="999" />
                </div>
            </div>
        </Transition>

    </div>
</template>

    


<style lang="postcss">
.slider-connect {
    @apply bg-primary;
}
</style>
