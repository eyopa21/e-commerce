<script setup>
const isOpen = ref(false)

const colors = ref(['red', 'blue', 'green', 'yellow'])
</script>

<template>
    <div class="cursor-pointer flex font-semibold mt-8 leading-none justify-between items-center" @click="isOpen = !isOpen">
        <span>Colors</span>
        <Icon name="ion:chevron-down-outline" class="transform transition-all duration-200"
            :class="isOpen ? 'rotate-180' : ''" />
    </div>
    <Transition name="drop-down">
        <div v-show="isOpen" class="mt-3 mr-6 max-h-[240px] grid gap-1.5 swatches overflow-auto custom-scrollbar">
            <div v-for="i in colors" :key="i" :style="{ '--color': i }" :title="i">
                <input :id="i" v-model="selectedTerms" class="hidden" type="checkbox" :value="i"
                    @change="checkboxChanged" />
                <label :for="i" class="cursor-pointer m-0"></label>
            </div>
        </div>
    </Transition>
</template>

<style scoped lang="postcss">
.swatches {
    grid-template-columns: repeat(auto-fit, minmax(24px, 1fr));
}

.swatches label {
    @apply rounded-md cursor-pointer shadow-sm m-0 mb-1 w-full block relative;
    background-color: var(--color, #eee);
    filter: saturate(0.75);
    aspect-ratio: 1/1;
    transition: all 0.2s ease;
}

.swatches label:hover,
.swatches input:checked+label {
    filter: saturate(1);
}

/* tick */
.swatches input:checked+label::after {
    content: '';
    width: 25%;
    height: 40%;
    border-right: 2.5px solid #fff;
    border-bottom: 2.5px solid #fff;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
}

/* Make tick black if the color is white */
.swatches input:checked+label[for='white']::after,
.swatches input:checked+label[for='yellow']::after {
    border-color: #666;
}
</style>
