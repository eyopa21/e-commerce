<script setup>
const mainData = useData();

const products = ref(mainData.value.products)

const total = ref(mainData.value.agg)
</script>

<template>
    <span class="text-sm font-light">

        <span v-if="!products?.length" class=" font-normal">No products found from {{ total }} products</span>
        <div v-else>

            <span>Showing </span>

            <span class="font-normal">1 </span>
            <span> to </span>
            <span class="font-normal">{{ products?.length }}</span>
            <span> of </span>
            <span class="font-normal"> {{ total }}</span>
        </div>

    </span>
</template>