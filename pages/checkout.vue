<script setup>

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
          <!-- Customer details -->
          <div>
            <h2 class="w-full mb-2 text-2xl font-semibold leading-none">Contact Information</h2>
            <p class="mt-1 text-sm text-gray-500">Already have an account? <a href="/my-account"
                class="text-primary text-semibold">Log in</a>.</p>
            <div class="w-full mt-4">
              <label for="email">Email</label>
              <input placeholder="johndoe@email.com" type="email" name="email" :class="{ 'has-error': isInvalidEmail }"
                @blur="checkEmailOnBlur(customer.billing.email)" @input="checkEmailOnInput(customer.billing.email)"
                required />
              <Transition name="scale-y" mode="out-in">
                <div v-if="isInvalidEmail" class="mt-1 text-sm text-red-500">Invalid email address</div>
              </Transition>
            </div>
            <div class="w-full my-2">
              <label for="email">Password</label>
              <VuePasswordInput id="password" class="my-2" placeholder="Password" :required="true" />
            </div>
            <div v-if="!viewer" class="flex items-center gap-2 my-2">
              <label for="creat-account">Create an account?</label>
              <input id="creat-account" type="checkbox" name="creat-account" />
            </div>
          </div>

          <div>
            <h2 class="w-full mb-3 text-2xl font-semibold">Billing detail</h2>
            <VueBillingDetails />
          </div>

          <label for="shipToDifferentAddress" class="flex items-center gap-2">
            <span>differentAddress</span>
            <input id="shipToDifferentAddress" type="checkbox" name="shipToDifferentAddress" />
          </label>

          <Transition name="scale-y" mode="out-in">
            <div>
              <h2 class="mb-4 text-xl font-semibold">shippingDetails</h2>
              <ShippingDetails />
            </div>
          </Transition>

          <!-- Shipping methods -->
          <!--div-- v-if="cart.availableShippingMethods.length">
            <h3 class="mb-4 text-xl font-semibold">shippingSelect</h3>
            <ShippingOptions :options="cart.availableShippingMethods[0].rates"
              :active-option="cart.chosenShippingMethods[0]" />
          </!--div-->

          <!-- Pay methods -->
          <!--div v-if="paymentGateways.length" class="mt-2 col-span-full">
            <h2 class="mb-4 text-xl font-semibold">paymentOptions</h2>
            <PaymentOptions v-model="orderInput.paymentMethod" class="mb-4" :paymentGateways="paymentGateways" />

            <Transition name="scale-y" mode="out-in">
              <StripeElements v-show="orderInput.paymentMethod == 'stripe'" v-slot="{ elements, instance }" ref="elms"
                :stripe-key="stripeKey" :instance-options="instanceOptions" :elements-options="elementsOptions">
                <StripeElement ref="card" :elements="elements" :options="cardOptions" />
              </StripeElements>
            </Transition>
          </!--div-->

          <!-- Order note -->
          <div>
            <h2 class="mb-4 text-xl font-semibold">orderNote'(Optional)</h2>
            <textarea id="order-note" name="order-note" class="w-full" rows="4"
              placeholder="orderNotePlaceholder"></textarea>
          </div>
        </div>

        <OrderSummary>
          <button
            class="flex items-center justify-center w-full gap-3 p-3 mt-4 font-semibold text-center text-white rounded-lg shadow-md bg-primary hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-50"
            :disabled="isCheckoutDisabled">
            {{ buttonText }}
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
