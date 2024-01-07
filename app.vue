<script setup>
import query from '../queries/get/get-products&categories.gql'
const currentUser = useCurrentUser();
const mainData = useData();
const { myAuth } = useAuth()
const { getCart } = useCart()
const loading = ref(true);
onMounted(async () => {
  try {
    const res = await myAuth()
    console.log("tokichaw", res)
    loading.value = false;
  } catch (err) {
    console.log("tokierror", err)
    loading.value = false;
  }
})
const { data, error } = useLazyAsyncQuery(query);
if (error.value) {
  console.log("cat eror", error.value)
} else {
  console.log("cat res", data.value)
  mainData.value.categories = data.value?.categories;
  mainData.value.products = data.value?.products;

}
</script>

<template>
  <div v-if="!loading" class="flex flex-col min-h-screen mx-2">
    <ClientOnly>
      <NuxtLayout>

        <NuxtPage />

      </NuxtLayout>
    </ClientOnly>
  </div>
  <div v-else class="absolute inset-0 flex items-center justify-center bg-white bg-opacity-25">
    <VueLoadingIcon />
  </div>
</template>

<style>
h1 {
  @apply text-primary
}
</style>