<script setup>
import query from '../queries/get/get-products&categories.gql'
const currentUser = useCurrentUser();
const layout = useLayout()
const mainData = useData();
const { myAuth } = useAuth()
const { getCart } = useCart()
const loading = ref(true);
onMounted(async () => {
  try {
    const res = await myAuth()
    console.log("tokichaw", res)
    //layout.value.showAlert = { error: false, message: res }
    loading.value = false;
  } catch (err) {
    console.log("tokierror", err)
    //layout.value.showAlert = { error: true, message: err.message }
    loading.value = false;
  }
})
const { data, error } = useLazyAsyncQuery(query);
if (error.value) {
  console.log("cat eror", error.value)
  layout.value.showAlert = { error: true, message: error.value }
} else {
  console.log("cat res", data.value)
  mainData.value.categories = data.value?.categories;
  mainData.value.products = data.value?.products;
  mainData.value.agg = data.value?.products[0].total_count

}
const height = ref(5)
</script>

<template>
  <ClientOnly>
    <NuxtLoadingIndicator :height="5" color="orange" />
    <div v-if="!loading" class="flex flex-col min-h-screen mx-2">
      <NuxtLayout>

        <NuxtPage />

      </NuxtLayout>
    </div>
    <div v-else class="absolute inset-0 flex items-center justify-center bg-white bg-opacity-25">
      <VueLoadingIcon />
    </div>

    <transition enter-from-class="translate-x-[200px] opacity-0" leave-to-class="translate-x-[200px] opacity-0"
      enter-active-class="transition-all duration-[0.3s] ease-out" leave-active-class="transition-all duration-[0.8s]">
      <VueToast v-if="layout.showAlert.message !== ''" />
    </transition>
  </ClientOnly>
</template>

<style>
h1 {
  @apply text-primary
}
</style>