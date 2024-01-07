<script setup>
import query from '../queries/get/get-single-product.gql'
const route = useRoute()
const layout = useLayout()
const mainData = useData();
const { addToCart, loading: cartLoading } = useCart()
const isLoggedIn = useCookie('isLoggedIn')

const theProduct = mainData.value.products?.filter(product => {

  return product.id === route.params.slug;
})

const quantity = ref(1)




const add = (productID, quantity) => {
  if (isLoggedIn.value) {

    addToCart(productID, quantity)
  } else {
    layout.value.showAlert = true
  }
}

</script>

<template>
  <div>


    <div v-if="theProduct?.length" class="container relative py-6 xl:max-w-7xl">
      <VueBreadcrumb :data="[{ name: 'Products', to: '/products' }, { name: 'Clothing', to: '/categories' }]"
        class="mb-6" />

      <div class="flex flex-col gap-10 md:flex-row md:justify-between lg:gap-24">
        <ProductImageGallery class="relative flex-1" :main-image="theProduct[0].images[0] || '/images/placeholder.jpg'"
          :gallery="theProduct[0].images" :node="theProduct[0].images" />


        <div class="lg:max-w-md xl:max-w-lg md:py-2">
          <div class="flex justify-between mb-4">
            <div class="flex-1">
              <h1 class="flex flex-wrap items-center gap-2 mb-2 text-2xl font-sesmibold">
                {{ theProduct[0].title }}

              </h1>
              <VueStarRating :rating="4" :count="5" />
            </div>

            <div class="text-xl">
              <div class="flex">
                <span class="font-semibold" />
                <span class="font-semibold ml-2">{{ theProduct[0].price }}$</span>
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
              <span>{{ theProduct[0].subtitle }}</span>
            </div>
          </div>

          <div class="mb-8 font-light prose">{{ theProduct[0].description }}</div>

          <hr />

          <form @submit.prevent="add(theProduct[0].id, quantity)">

            <div
              class="fixed bottom-0 left-0 z-10 flex items-center w-full gap-4 p-4 mt-12 bg-white md:static md:bg-transparent bg-opacity-90 md:p-0">
              <input v-model="quantity" type="number" min="1" aria-label="Quantity"
                class="bg-white border rounded-lg flex text-left p-2.5 w-20 gap-4 items-center justify-center focus:outline-none" />
              <VueButtonAddToCart :loading="cartLoading" class="flex-1 w-full md:max-w-xs" />
            </div>
          </form>

          <div class="grid gap-2 my-8 text-sm">
            <div class="flex items-center gap-2">
              <span class="text-gray-400">Category:</span>
              <div class="product-categories">
                <NuxtLink v-for="i in 2" :key="i" :to="`/product-category/${i}`" class="hover:text-primary" :title="i">
                  {{
                    i }}<span class="comma">, </span></NuxtLink>
              </div>
            </div>
          </div>
          <hr />
          <div class="flex flex-wrap gap-4">
            <VueButtonWishlistButton :product="theProduct[0]" />
            <VueButtonShareButton :product="theProduct[0]" />
          </div>
        </div>
      </div>
      <VueAlert
        :message="{ type: 'auth', title: 'Authentication error', description: 'PLease login first to access this service!!' }" />
    </div>
    <div v-else>
      <VueNoProductsFound />
    </div>

    <!--div class="my-32">
      <LazyProductTabs :product="product" />
    </!--div-->
    <div class="my-32">
      <div class="mb-4 text-xl font-semibold">Product you may like</div>
      <ProductGrid class="grid-cols-2 md:grid-cols-4 lg:grid-cols-5" />
    </div>


  </div>
</template>

<style scoped>
.product-categories>a:last-child .comma {
  display: none;
}

input[type='number']::-webkit-inner-spin-button {
  opacity: 1;
}
</style>
