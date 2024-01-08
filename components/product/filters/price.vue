
<script setup>
const { getFilter, setFilter, applyFilter, isFiltersActive } = await useFiltering();
const { removeBodyClass } = useHelpers()
const isOpen = ref(false)
const minValue = ref(0)
const maxValue = ref(10000)
const categoryFilterValue = ref(computed(() => {
    return getFilter('category');
}));
const activeFilters = ref(getFilter('price'));
const price = activeFilters.value.length ? ref(activeFilters.value) : ref([0, maxValue.value]);

const handleFilter = () => {
    removeBodyClass()
    applyFilter(categoryFilterValue.value, price.value)
}
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

                {{ price }} {{ categoryFilterValue }}
                <div class="flex relative items-center">
                    <input v-model="price[0]" id="price-from"
                        class="bg-white border rounded-lg max-w-full border-gray-200 leading-none w-auto p-2 pl-6 md:text-sm"
                        type="number" placeholder="From" min="0" @change="handleFilter" />
                    <label for="price-from" class="leading-none px-2 text-gray-400 absolute">$</label>
                </div>
                <div class="p-1">
                    <URange v-model="price[0]" :min="0" :max="500" name="range" @change="handleFilter" />
                </div>



                <div class="flex relative items-center">
                    <input v-model="price[1]" id="price-to"
                        class="bg-white border rounded-lg max-w-full border-gray-200 leading-none w-auto p-2 pl-6 md:text-sm"
                        type="number" placeholder="Up to" min="1" @change="handleFilter" />
                    <label for="price-to" class="leading-none px-2 text-gray-400 absolute">$</label>
                </div>
                <div class="p-1">
                    <URange v-model="price[1]" name="range" :min="500" :max="999" @change="handleFilter" />
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
