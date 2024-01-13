<script setup>
import order_query from '../queries/insert/order.gql'
import add_billing_query from '../queries/insert/add-billing-address.gql'
const { getCart, totalSum, clearCart } = useCart()
const currentUser = useCurrentUser();
const router = useRouter();
const { mutate: Order, onDone, onError, loading } = useMutation(order_query)
const { mutate: ShipToDiffrent, onDone: onShipDone, onError: onShipError, loading: shipLoading } = useMutation(add_billing_query)
const layout = useLayout();
const billing = ref('')
const orderData = ref({

  payment: '',
  note: ''
})



const order = () => {

  if (orderData.value.payment && currentUser.value.cart?.length) {
    console.log("order", orderData.value, billing.value)

    ShipToDiffrent({ user_id: currentUser.value.id, address1: billing.value.address1, address2: billing.value.address2, city: billing.value.city, country: billing.value.country, subcity: billing.value.sub_city, kebele: billing.value.kebele, company_name: billing.value.company_name, zip_code: billing.value.zip_code })
    onShipDone((res) => {
      console.log("ship res", res)
      Order({ payment_method: orderData.value.payment, products: currentUser.value.cart, subtotal: totalSum.value, user_id: currentUser.value.id, note: orderData.value.note, billing_id: res.data?.insert_billing_and_shipping_addresses_one?.id })
    })
    onShipError(err => {
      console.log("ship error", orderData.value.payment, err)
      layout.value.showAlert = { error: true, message: 'Order not successfull, please try again' }
    })

    onDone(res => {
      console.log("res", res)
      layout.value.showAlert = { error: false, message: 'Order complete' }
      clearCart()
      router.push('/')
    })
    onError(err => {
      console.log("errrr", err)
      layout.value.showAlert = { error: true, message: 'Order not successfull, please try again' }
    })
  } else {
    layout.value.showAlert = { error: true, message: "PLease select a payment method" }
  }
}

</script>

<template>
  <div class="flex flex-col min-h-[600px]">

    <div>


      <form v-if="currentUser.cart" class="container flex flex-wrap items-start gap-8 my-16 justify-evenly lg:gap-20">
        <div class="grid w-full max-w-2xl gap-8 checkout-form md:flex-1">



          <div>

            <AccountBillingAndShipping @checkout="n => billing = n" />
          </div>
          <div>
            <h2 class="mb-4 text-xl font-semibold">Payment options</h2>
            <OrderPaymentOptions class="mb-4" @payment="n => orderData.payment = n" />
          </div>

          <div>
            <h2 class="mb-4 text-xl font-semibold">Order note <span
                class="font-thin text-sm text-primary">(optional)</span> </h2>
            <textarea v-model="orderData.note" id="order-note" name="order-note" class="w-full" rows="4"
              placeholder="Please leave your order note here..."></textarea>
          </div>
        </div>

        <OrderSummary>
          <button :disabled="loading || shipLoading" @click="order()" type="button"
            class="flex items-center justify-center w-full gap-3 p-3 mt-4 font-semibold text-center text-white rounded-lg shadow-md bg-primary hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-50">
            Proceed To Order
            <VueLoadingIcon v-if="loading || shipLoading" color="#fff" size="18" :class="{ 'cursor-wait ': loading }" />
          </button>
        </OrderSummary>
      </form>
      <div v-else class="flex flex-col items-center justify-center flex-1 mb-12">
        <div class="mb-20 text-xl text-gray-300">Empty cart</div>
      </div>
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