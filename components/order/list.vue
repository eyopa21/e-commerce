<script setup>
import order_query from '~/queries/get/get-orders.gql'
const router = useRouter();
const currentUser = useCurrentUser();
const layout = useLayout();
const { formatDate, scrollToTop } = useHelpers();
const orders = ref([])
const isOpen = ref(false)
const { onResult, onError, loading } = useQuery(order_query, { user_id: currentUser.value.id })
onResult(res => {
  console.log(res.data)
  orders.value = res.data?.orders
})
onError(err => {
  console.log(err)
  layout.value.showAlert = { error: true, message: 'Cannot fetch order, please try again' }
})


const refresh = () => {
  // orders.value = null;
  scrollToTop();

};

const goToOrder = (orderNumber) => {
  router.push(`/order-summary/${orderNumber}`);
};

const isEmpty = ref(computed(() => {
  if (loading.value) return false
  if (orders.value?.length) return false

  return true
}))
</script>

<template>
  <div class="bg-white rounded-lg flex shadow min-h-[250px] p-12 justify-center items-center">
    <div v-if="orders?.length" class="w-full">
      <table class="w-full text-left table-auto" aria-label="Order List">
        <thead>

          <tr>
            <th>Order Id</th>
            <th>Date</th>
            <th>Status</th>
            <th class="text-right">Total</th>
          </tr>
        </thead>
        <tbody>

          <tr @click="goToOrder(order.id)" v-for="(order, key) in orders" :key="key"
            class="cursor-pointer hover:underline">



            <td class="rounded-l-lg">
              {{ order.id }}
            </td>
            <td>{{ formatDate(order.created_at) }}</td>
            <td>
              <OrderStatusLabel :status="order.status" />
            </td>
            <td class="text-right rounded-r-lg">
              {{ order.total }}
            </td>
            <!--tr>
            <div>
              <div class="cursor-pointer flex font-semibold mt-8 leading-none justify-between items-center"
                @click="isOpen = !isOpen">

                <Icon name="ion:chevron-down-outline" class="transform transition-all duration-200"
                  :class="isOpen ? 'rotate-180' : ''" />
              </div>
              <Transition name="drop-down">


                <div v-if="isOpen"
                  class="mt-3 mr-1 max-h-[240px] flex justify-start  bg-red-400 overflow-auto custom-scrollbar">
                  <div class="flex gap-2 items-center">
                    <label for="sale-true" class="cursor-pointer m-0 text-sm sr-only"
                      aria-label="Only show products on sale">
                      Only show products on sale</label>
                    <input id="sale-true" type="checkbox" :value="true" aria-label="Sale Products Only" />
                  </div>
                </div>
              </Transition>
            </div>
          </!--tr-->


          </tr>
        </tbody>
      </table>
      <!--div class="text-center flex justify-center w-full mt-8">
        <button type="button" @click="refresh"
          class="flex items-center gap-1 text-sm leading-none hover:bg-gray-50 p-2 rounded">
          <span>Reresh list</span>
          <Icon name="ion:refresh-outline" />
        </button>
      </!--div-->
    </div>
    <div v-if="isEmpty" class="min-h-[250px] flex items-center justify-center text-gray-500 text-lg">No orders found.
    </div>
    <VueLoadingIcon v-if="loading" size="24" stroke="2" />
  </div>
</template>

<style lang="postcss" scoped>
tbody tr:nth-child(odd) {
  background-color: #fafafa;
}

tbody tr {
  @apply text-sm text-gray-500 hover:text-gray-800;
}

td,
th {
  @apply py-2 px-3;
}
</style>
