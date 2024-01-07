<script setup>
import query from '../queries/get/get-products&categories.gql'
const currentUser = useCurrentUser();
const mainData = useData();
const { myAuth } = useAuth()
const { getCart, loading } = useCart()
onMounted(async () => {
  try {
    const res = await myAuth()
    console.log("tokichaw", res)
  } catch (err) {
    console.log("tokierror", err)
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
  <div class="flex flex-col min-h-screen mx-2">
    <ClientOnly>
      <NuxtLayout>

        <NuxtPage />

      </NuxtLayout>
    </ClientOnly>
  </div>
</template>

<style>
h1 {
  @apply text-primary
}
</style>