<script setup>
import category_query from '../queries/get/get-categories.gql'
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
const { data, error } = useLazyAsyncQuery(category_query);
if (error.value) {
  console.log("cat eror", error.value)
} else {
  console.log("cat res", data.value)
  mainData.value.categories = data.value?.categories;
}
</script>

<template>
  <div class="flex flex-col min-h-screen mx-2">

    <NuxtLayout>

      <NuxtPage />

    </NuxtLayout>

  </div>
</template>

<style>
h1 {
  @apply text-primary
}
</style>