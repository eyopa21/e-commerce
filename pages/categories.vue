<script setup>


const categories = ref([{
  image: '/hero-3.jpg',
  title: 'shoes',
  name: 'shoes'

}, {
  image: '/hero-3.jpg',
  title: 'shoes',
  name: 'shoes'

}, {
  image: '/hero-3.jpg',
  title: 'shoes',
  name: 'shoes'

}, {
  image: '/hero-3.jpg',
  title: 'shoes',
  name: 'shoes'

}, {
  image: '/hero-3.jpg',
  title: 'shoes',
  name: 'shoes'

}, {
  image: '/hero-3.jpg',
  title: 'shoes',
  name: 'shoes'

}])

useHead({
  title: `Product Categories - WooNuxt`,
  meta: [{ name: 'description', content: 'All product categories' }],
  link: [{ rel: 'canonical', href: 'https://v3.woonuxt.com/categories' }],
});
</script>

<template>
  <main class="container">
    <div class="grid grid-cols-2 gap-4 my-6 md:grid-cols-3 lg:gap-8 xl:grid-cols-4">
      <ProductCategoryCard v-for="(category, i) in categories" :key="i" class="w-full" :node="category" />
    </div>
  </main>
</template>
