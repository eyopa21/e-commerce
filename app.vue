<script setup>
const currentUser = useCurrentUser();
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