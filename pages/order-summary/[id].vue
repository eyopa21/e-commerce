<script lang="ts" setup>
import order_query from '~/queries/get/get-order-summary.gql'
const { formatDate } = useHelpers();
const route = useRoute();
const order = ref('')
const layout = useLayout();
const { onResult, onError, loading } = useQuery(order_query, { id: route.params.id }, { fetchPolicy: "no-cache" })
onResult(res => {
  console.log(res.data)
  order.value = res.data?.orders[0]
})
onError(err => {
  console.log(err)
  layout.value.showAlert = { error: true, message: 'Cannot fetch order, please try again' }
})

const isEmpty = ref(computed(() => {
  if (loading.value) return false
  if (order.value) return false

  return true
}))
</script>

<template>
  <div
    class="w-full min-h-[600px] flex justify-center items-center p-8 text-gray-800 md:bg-white md:rounded-xl md:mx-auto md:shadow-lg md:my-24 md:mt-8 md:max-w-3xl md:p-16">
    <div v-if="isEmpty" class="w-full text-center">
      <h1 class="mb-2 text-xl font-semibold">Order summary</h1>
      <p>Thank you for your order. We will send you an email with the order details.</p>
      <NuxtLink to="/"
        class="bg-primary rounded-lg font-bold text-white text-center min-w-[150px] p-2.5 focus:outline-noney">
        Go home
      </NuxtLink>
    </div>
    <div v-if="order" class="w-full">
      <h1 class="mb-2 text-xl font-semibold">Order summary</h1>
      <p>Thank you for your order. We will send you an email with the order details.</p>

      <hr class="my-8" />

      <div class="flex justify-between items-center">
        <div>
          <div class="text-xs text-gray-400 uppercase mb-2">Order id</div>
          <div class="leading-none">{{ order.id }}</div>
        </div>
        <div>
          <div class="text-xs text-gray-400 uppercase mb-2">Date</div>
          <div class="leading-none">{{ formatDate(order.created_at) }}</div>
        </div>
        <div>
          <div class="text-xs text-gray-400 uppercase mb-2">Status</div>
          <OrderStatusLabel :status="order.status" />
        </div>
        <div>
          <div class="text-xs text-gray-400 uppercase mb-2">Payment method</div>
          <div class="leading-none">{{ order.payment_method }}</div>
        </div>
      </div>

      <hr class="my-8" />

      <div class="grid gap-2">
        <div v-for="item in order?.products" :key="item" class="flex items-center justify-between gap-8">
          <img :src="item.product.images[0]" class="w-16 h-16 rounded-xl" />
          <div class="flex-1 leading-tight">
            {{ item.product.title }}
          </div>
          <div class="text-sm text-gray-600">Qty. {{ item.quantity }}</div>
          <span class="text-sm font-semibold">{{ item.product.price }}</span>
        </div>
      </div>

      <hr class="my-8" />

      <div>
        <div class="flex justify-between">
          <span>Subtotal</span>
          <span>{{ order.subtotal }}</span>
        </div>
        <div class="flex justify-between">
          <span>tax</span>
          <span>15%({{ order.tax }})</span>
        </div>
        <div class="flex justify-between">
          <span>Shipping</span>
          <span>500</span>
        </div>
        <hr class="my-8" />
        <div class="flex justify-between">
          <span class>Total</span>
          <span class="font-semibold">{{ order.total }}</span>
        </div>
      </div>
    </div>
    <div class="w-full ">

      <VueLoadingIcon v-if="loading" />
    </div>
  </div>
</template>
