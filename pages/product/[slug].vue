<script lang="ts" setup>

const theProduct = ref({
  images: ['/hero-3.jpg', '/placeholder.jpg', '/hero-3.jpg', '/placeholder.jpg'],
  title: 'Yellow boots',
  subtitle: 'subtitle',
  description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo xsppil.',
  price: 40
})

</script>

<template>
  <main class="container relative py-6 xl:max-w-7xl" v-if="theProduct">
    <VueBreadcrumb :data="[{ name: 'Products', to: '/products' }, { name: 'Clothing', to: '/categories' }]"
      class="mb-6" />

    <div class="flex flex-col gap-10 md:flex-row md:justify-between lg:gap-24">
      <ProductImageGallery class="relative flex-1" :first-image="theProduct.images[0]"
        :main-image="theProduct.images[1] || '/images/placeholder.jpg'" :gallery="theProduct.images"
        :node="theProduct.images" />
      <!--NuxtImg v-else class="relative flex-1" src="/images/placeholder.jpg" :alt="product?.name || 'Product'" /-->

      <div class="lg:max-w-md xl:max-w-lg md:py-2">
        <div class="flex justify-between mb-4">
          <div class="flex-1">
            <h1 class="flex flex-wrap items-center gap-2 mb-2 text-2xl font-sesmibold">
              {{ theProduct.title }}

            </h1>
            <VueStarRating :rating="4" :count="5" />
          </div>

          <div class="text-xl">
            <div class="flex">
              <span class="font-semibold" />
              <span class="font-semibold ml-2">{{ theProduct.price }}$</span>
            </div>
          </div>
        </div>

        <div class="grid gap-2 my-8 text-sm">
          <div class="flex items-center gap-2">
            <span class="text-gray-400">Availablity: </span>
            <span class="text-green-600">Instock</span>
            <span class="text-red-600">Outstock</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-gray-400">SUbtitle: </span>
            <span>{{ theProduct.subtitle }}</span>
          </div>
        </div>

        <div class="mb-8 font-light prose" v-html="theProduct.description" />

        <hr />

        <form @submit.prevent="addToCart(selectProductInput)">
          <!--AttributeSelections v-if="product.type == 'VARIABLE' && product.attributes && product.variations"
            class="mt-4 mb-8" :attrs="product.attributes.nodes" :variations="product.variations.nodes"
            @attrs-changed="updateSelectedVariations" /-->
          <div
            class="fixed bottom-0 left-0 z-10 flex items-center w-full gap-4 p-4 mt-12 bg-white md:static md:bg-transparent bg-opacity-90 md:p-0">
            <input type="number" min="1" aria-label="Quantity"
              class="bg-white border rounded-lg flex text-left p-2.5 w-20 gap-4 items-center justify-center focus:outline-none" />
            <VueButtonAddToCart class="flex-1 w-full md:max-w-xs" :disabled="false" :class="{ loading: false }" />
          </div>
        </form>

        <div class="grid gap-2 my-8 text-sm">
          <div class="flex items-center gap-2">
            <span class="text-gray-400">Category:</span>
            <div class="product-categories">
              <NuxtLink v-for="i in 2" :key="i" :to="`/product-category/${i}`" class="hover:text-primary" :title="i">{{
                i }}<span class="comma">, </span></NuxtLink>
            </div>
          </div>
        </div>
        <hr />
        <div class="flex flex-wrap gap-4">
          <VueButtonWishlistButton />
          <VueButtonShareButton :product="theProduct" />
        </div>
      </div>
    </div>
    <!--div v-if="product.description || product.reviews" class="my-32">
      <LazyProductTabs :product="product" />
    </!--div>
    <div-- class="my-32" v-if="product.related">
      <div class="mb-4 text-xl font-semibold">{{ $t('messages.shop.youMayLike') }}</div>
      <ProductRow :products="product.related.nodes" class="grid-cols-2 md:grid-cols-4 lg:grid-cols-5" />
    </div-->
  </main>
</template>

<style scoped>
.product-categories>a:last-child .comma {
  display: none;
}

input[type='number']::-webkit-inner-spin-button {
  opacity: 1;
}
</style>
