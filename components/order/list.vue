<script setup>
const router = useRouter();
const { formatDate, scrollToTop } = useHelpers();




const refresh = () => {
  orders.value = null;
  scrollToTop();

};

const goToOrder = (orderNumber) => {
  router.push(`/order-summary/${orderNumber}`);
};

const orders = ref({
  orderNumber: 11234,
  date: '11/2/33',
  status: 'PENDING',
  total: 345
})
</script>

<template>
  <div class="bg-white rounded-lg flex shadow min-h-[250px] p-12 justify-center items-center">
    <div class="w-full">
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

          <tr v-for="(order, key) in orders" :key="key" class="cursor-pointer hover:underline">
            {{ order }}
            <td class="rounded-l-lg">
              {{ order.orderNumber }}
            </td>
            <td>{{ order.date }}</td>
            <td>
              {{ order.status }}
            </td>
            <td class="text-right rounded-r-lg">
              {{ order.total }}
            </td>
          </tr>
        </tbody>
      </table>
      <div class="text-center flex justify-center w-full mt-8">
        <button type="button" @click="refresh"
          class="flex items-center gap-1 text-sm leading-none hover:bg-gray-50 p-2 rounded">
          <span>Reresh list</span>
          <Icon name="ion:refresh-outline" />
        </button>
      </div>
    </div>
    <!--div class="min-h-[250px] flex items-center justify-center text-gray-500 text-lg">No orders found.</!--div>
    <LoadingIcon size="24" stroke="2" /-->
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
