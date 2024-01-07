<script setup>
const mainData = useData();

const categories = ref(mainData.value.categories)

useHead({
  title: `Product Categories - WooNuxt`,
  meta: [{ name: 'description', content: 'All product categories' }],
  link: [{ rel: 'canonical', href: 'https://v3.woonuxt.com/categories' }],
});
</script>

<template>
  <main class="container px-2">
    <div class="grid grid-cols-2 gap-4 my-6 md:grid-cols-3 lg:gap-8 xl:grid-cols-4">
      <ProductCategoryCard v-for="(category, i) in categories" :key="i" class="w-full" :node="category" />
    </div>
  </main>
</template>
