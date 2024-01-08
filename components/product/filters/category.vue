<script setup>
const { getFilter, setFilter, applyFilter, isFiltersActive } = await useFiltering();

const isOpen = ref(false)
const mainData = useData();
const categories = ref(mainData.value.categories)
const priceFilterValue = ref(computed(() => {
    return getFilter('price');
}));
const categoryFilterValue = ref(getFilter('category') || []);

const checkboxChanged = async () => {


    applyFilter(categoryFilterValue.value, priceFilterValue.value);

}
</script>

<template>
    <div>
        <div class="cursor-pointer flex font-semibold mt-8 justify-between items-center" @click="isOpen = !isOpen">
            <span>Category </span>
            <Icon name="ion:chevron-down-outline" class="transform transition-all duration-200"
                :class="isOpen ? 'rotate-180' : ''" />
        </div>
        <Transition name="drop-down">

            <div v-show="isOpen" class="mt-3 mr-1 max-h-[240px] grid gap-1 overflow-auto custom-scrollbar">

                <div v-for="(i, key) in categories" :key="key" class="flex gap-2 items-center">
                    <input v-model="categoryFilterValue" :value="i.name" :id="key" type="checkbox"
                        @change="checkboxChanged" />
                    <label for="color.slug" class="cursor-pointer m-0 text-sm">
                        <span>{{ i.name }}</span>

                    </label>
                </div>
            </div>
        </Transition>
    </div>
</template>
