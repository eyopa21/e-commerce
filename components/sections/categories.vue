<script setup>
const mainData = useData();
const categories = ref(mainData.value.categories)

</script>

<template>
    <section class="container my-16">
        <div class="flex items-end justify-between">
            <h2 class="text-lg font-semibold md:text-2xl">ShopByCategory</h2>
            <NuxtLink class="text-primary" to="/categories">ViewAll</NuxtLink>
        </div>
        <div class="grid justify-center grid-cols-2 gap-4 mt-8 md:grid-cols-3 lg:grid-cols-6">
            <ProductCategoryCard v-for="(category, i) in categories" :key="i" class="w-full" :node="category" />
        </div>
    </section>
</template>