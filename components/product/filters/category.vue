<script setup>
const isOpen = ref(false)

const categories = ref(['Clothing', 'Hoodies', 'Clothing', 'Hoodies', 'Clothing', 'Hoodies', 'Clothing', 'Hoodies'])
</script>

<template>
    <div>
        <div class="cursor-pointer flex font-semibold mt-8 justify-between items-center" @click="isOpen = !isOpen">
            <span>Category</span>
            <Icon name="ion:chevron-down-outline" class="transform" :class="isOpen ? 'rotate-180' : ''" />
        </div>
        <div v-show="isOpen" class="mt-3 mr-1 max-h-[240px] grid gap-1 overflow-auto custom-scrollbar">
            <div v-for="(i, key) in categories" :key="key" class="flex gap-2 items-center">
                <input :id="key" type="checkbox" @change="checkboxChanged" />
                <label for="color.slug" class="cursor-pointer m-0 text-sm">
                    <span>{{ i }}</span>

                </label>
            </div>
        </div>
    </div>
</template>
