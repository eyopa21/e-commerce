<script setup>
import order_query from '../queries/insert/order.gql'
const { getCart, totalSum } = useCart()
const currentUser = useCurrentUser();
const { mutate: Order, onDone, onError, loading } = useMutation(order_query)
const layout = useLayout();
const billing = ref('')
const orderData = ref({

  payment: '',
  note: ''
})
const order = () => {
  if (orderData.value.payment) {
    console.log("order", orderData.value, billing.value)

    Order({ payment_method: orderData.value.payment, products: [{ "id": 1, "name": "shoes", "price": 1000 }, { "id": 123, "name": "bag", "price": 1000 }], subtotal: totalSum.value, user_id: currentUser.value.id, note: orderData.value.note, billing_id: currentUser.value.currentUser.billing_and_shipping_addresses[0]?.id })
    onDone(res => {
      console.log("res", res)
    })
    onError(err => {
      console.log("errrr", err)
    })
  } else {
    layout.value.showAlert = { error: true, message: "PLease select a payment method" }
  }
}

</script>

<template>
  <div class="flex flex-col min-h-[600px]">
    <!--LoadingIcon v-if="!cart" class="m-auto" /-->
    <div>
      <!--div v-if="cart.isEmpty" class="flex flex-col items-center justify-center flex-1 mb-12">
        <div class="mb-20 text-xl text-gray-300">Empty cart</div>
      </!--div-->

      <form class="container flex flex-wrap items-start gap-8 my-16 justify-evenly lg:gap-20" @submit.prevent="payNow">
        <div class="grid w-full max-w-2xl gap-8 checkout-form md:flex-1">



          <div>

            <AccountBillingAndShipping @checkout="n => billing = n" />
          </div>
          <div>
            <h2 class="mb-4 text-xl font-semibold">Payment options</h2>
            <OrderPaymentOptions class="mb-4" @payment="n => orderData.payment = n" />
          </div>

          <div>
            <h2 class="mb-4 text-xl font-semibold">Order note(Optional)</h2>
            <textarea v-model="orderData.note" id="order-note" name="order-note" class="w-full" rows="4"
              placeholder="orderNotePlaceholder"></textarea>
          </div>
        </div>

        <OrderSummary>
          <button @click="order()" type="submit"
            class="flex items-center justify-center w-full gap-3 p-3 mt-4 font-semibold text-center text-white rounded-lg shadow-md bg-primary hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-50">
            Proceed To Order
            <LoadingIcon v-if="loading" color="#fff" size="18" :class="{ 'cursor-wait ': loading }" />
          </button>
        </OrderSummary>
      </form>
    </div>
  </div>
</template>

<style lang="postcss">
.checkout-form input[type='text'],
.checkout-form input[type='email'],
.checkout-form input[type='tel'],
.checkout-form input[type='password'],
.checkout-form textarea,
.checkout-form .StripeElement,
.checkout-form select {
  @apply bg-white border rounded-md outline-none border-gray-300 shadow-sm w-full py-2 px-4;
}

.checkout-form input.has-error,
.checkout-form textarea.has-error {
  @apply border-red-500;
}

.checkout-form label {
  @apply my-1.5 text-xs text-gray-600 uppercase;
}

.checkout-form .StripeElement {
  padding: 1rem 0.75rem;
}
</style>