<script setup>
const isLoggedIn = useCookie('isLoggedIn')
const route = useRoute();
const layout = useLayout();
const { logout, isPending } = useAuth();
const activeTab = computed(() => route.query.tab || 'my-details');
const { onLogin, onLogout, getToken } = useApollo()
const currentUser = useCurrentUser()
const { clearAllCookies } = useHelpers();
const logoutUser = async () => {

  try {
    await logout();
  } catch (error) {
    console.log("logout eroror", error)
    layout.value.showAlert = { error: true, message: error }
  }


}
</script>

<template>
  <div class="container min-h-[600px]">



    <div class="flex flex-col items-start w-full lg:gap-8 mb-24 lg:flex-row">
      <nav class="flex lg:grid flex-wrap w-full gap-1 my-8 text-gray-600 min-w-[240px] top-24 lg:w-auto lg:sticky">
        <NuxtLink to="/my-account?tab=my-details"
          class="flex items-center gap-4 p-3 px-4 rounded-lg hover:bg-white hover:text-primary"
          :class="{ active: activeTab == 'my-details' }">
          <Icon name="ion:information-circle-outline" size="22" />
          My details
        </NuxtLink>
        <NuxtLink to="/my-account?tab=orders"
          class="flex items-center gap-4 p-3 px-4 rounded-lg hover:bg-white hover:text-primary"
          :class="{ active: activeTab == 'orders' }">
          <Icon name="ion:bag-check-outline" size="22" />
          Orders
        </NuxtLink>

        <button class="flex items-center gap-4 p-3 px-4 rounded-lg hover:bg-white hover:text-primary" @click="logoutUser">
          <VueLoadingIcon v-if="isPending" size="22" />
          <Icon v-else name="ion:log-out-outline" size="22" />
          Logout
        </button>
      </nav>

      <main class="flex-1 w-full lg:my-8 rounded-lg">
        <AccountDetails v-if="activeTab === 'my-details'" />
        <OrderList v-else-if="activeTab === 'orders'" />
      </main>
    </div>

  </div>
</template>

<style lang="postcss" scoped>
a.active {
  @apply text-primary;
}
</style>
