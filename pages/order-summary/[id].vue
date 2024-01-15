<script lang="ts" setup>
const route = useRoute();
const order = ref() as Ref<null | Order>;
const { customer } = useAuth();

onMounted(() => {
  if (route.params.orderId) getOrder();
});

async function getOrder() {
  try {
    const data = await GqlGetOrder({ id: route.params.orderId as string });
    if (data.order) order.value = data.order;
  } catch (err: any) {
    console.error(err);
  }
}

function formatDate(date = '') {
  return new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

function formatPrice(price: string) {
  return parseFloat(price).toLocaleString('en-US', { style: 'currency', currency: 'EUR' });
}

const isGuest = computed(() => {
  return !customer.value.databaseId;
});
</script>

<template>
  <div
    class="w-full min-h-[600px] flex justify-center items-center p-8 text-gray-800 md:bg-white md:rounded-xl md:mx-auto md:shadow-lg md:my-24 md:mt-8 md:max-w-3xl md:p-16">
    <div class="w-full">
      <h1 class="mb-2 text-xl font-semibold">Order summary</h1>
      <p>Thank you for your order. We will send you an email with the order details.</p>

      <hr class="my-8" />

      <div class="flex justify-between items-center">
        <div>
          <div class="text-xs text-gray-400 uppercase mb-2">Order id</div>
          <div class="leading-none">#22</div>
        </div>
        <div>
          <div class="text-xs text-gray-400 uppercase mb-2">Date</div>
          <div class="leading-none">11-22-33</div>
        </div>
        <div>
          <div class="text-xs text-gray-400 uppercase mb-2">Status</div>
          <OrderStatusLabel :status="`pending`" />
        </div>
        <div>
          <div class="text-xs text-gray-400 uppercase mb-2">Payment method</div>
          <div class="leading-none">Pay pal</div>
        </div>
      </div>

      <hr class="my-8" />

      <div class="grid gap-2">
        <div v-for="item in 2" :key="item" class="flex items-center justify-between gap-8">
          <img src="/placeholder.jpg" class="w-16 h-16 rounded-xl" />
          <div class="flex-1 leading-tight">
            product 1
          </div>
          <div class="text-sm text-gray-600">Qty. 22</div>
          <span class="text-sm font-semibold">1234</span>
        </div>
      </div>

      <hr class="my-8" />

      <div>
        <div class="flex justify-between">
          <span>Subtotal</span>
          <span>234</span>
        </div>
        <div class="flex justify-between">
          <span>tax</span>
          <span>15%</span>
        </div>
        <div class="flex justify-between">
          <span>Shipping</span>
          <span>500</span>
        </div>
        <hr class="my-8" />
        <div class="flex justify-between">
          <span class>Total</span>
          <span class="font-semibold">12345</span>
        </div>
      </div>
    </div>
    <!--div class="w-full text-center">
      <h1 class="mb-2 text-xl font-semibold">Order summary</h1>
      <p>Thank you for your order. We will send you an email with the order details.</p>
      <NuxtLink to="/"
        class="bg-primary rounded-lg font-bold text-white text-center min-w-[150px] p-2.5 focus:outline-noney">
        Go home
      </NuxtLink>
    </!--div>
    <LoadingIcon /-->
  </div>
</template>
