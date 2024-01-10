
<script setup>
const { removeBodyClass } = useHelpers()
const { sort } = useSort();
const orderby = ref('')
const order = ref('asc')
const menus = ['Latest', 'Alphabetically', 'Price']
const selected = ref(menus[0])

const Sort = (value) => {
    removeBodyClass('show-filters');
    sort(value, order.value)
}
</script>

<template>
    <div class="flex">


        <div class="inline-flex ml-auto -space-x-px shadow-sm rounded-m isolate">
            <button
                class="relative inline-flex items-center p-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50 focus:z-20"
                aria-label="Sort" @click="order = order === 'asc' ? 'desc' : 'asc'; Sort(selected)">
                <Icon name="ion:filter-outline" size="18" :class="order === 'asc' ? 'rotate-180' : ''"
                    class="transition-transform transform transform-origin-center" />
            </button>
        </div>
        <USelectMenu v-slot="{ open }" v-model="selected" :options="menus" @change="Sort(selected)"
            class="w-full md:w-48 font-normal z-50">
            <UButton color="gray" class="flex-1 justify-between py-2 rounded-l-none text-normal">
                {{ selected }}

                <UIcon name="i-heroicons-chevron-right-20-solid"
                    class="w-5 h-5 transition-transform text-gray-400 dark:text-gray-500"
                    :class="[open && 'transform rotate-90']" />
            </UButton>
        </USelectMenu>
    </div>
</template>



