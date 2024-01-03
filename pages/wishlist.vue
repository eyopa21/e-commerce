<script setup>
const { theList } = useWishlist();
console.log(theList.value)
</script>

<template>
  <div class="mx-auto my-4 min-h-[600px] w-full max-w-3xl px-4">

    <h1 class="py-4 my-4 text-2xl font-semibold text-center border-b">WhishList</h1>

    <ul v-if="theList.length" class="grid my-8 divide-y divide-gray-100">
      <LazyWishListItem v-for="(product, key) in theList" :key="key" :product="product" />
    </ul>
    <div v-else class="flex text-center min-h-[600px] text-gray-500 items-center justify-center">
      <p>No Items here</p>
    </div>

  </div>
</template>
