<script setup>
const layout = useLayout();
const billing = ref('')
const orderData = ref({

  payment: '',
  note: ''
})
const order = () => {
  if (orderData.value.payment) {
    console.log("order", orderData.value, billing.value)

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
            <LoadingIcon v-if="isProcessingOrder" color="#fff" size="18" />
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