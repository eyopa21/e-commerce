<script setup>
//const { cart, isUpdatingCart } = useCart();
const isUpdatingCart = ref(false)

const shippingPrice = ref(500);

const { clearCart, getCart, loading, totalSum } = useCart()
await getCart();
const currentUser = useCurrentUser();
const cartItem = ref(computed(() => {
  return currentUser.value.cart
}))
</script>

<template>
  <aside class="bg-white rounded-lg shadow-lg mb-8 w-full min-h-[280px] p-8 relative md:max-w-sm md:top-36 md:sticky">
    <h2 class="mb-6 text-xl font-semibold leading-none">Order summary</h2>



    <ul class="flex flex-col gap-4 -mr-2 overflow-y-scroll">
      <CartCard v-for="item in cartItem" :key="item.key" :item="item" />
    </ul>

    <div class="grid gap-1 text-sm font-semibold text-gray-500 mt-8">
      <div class="flex justify-between">
        <span>Subtotal</span>
        <span class="text-gray-700 tabular-nums">{{ totalSum }}</span>
      </div>
      <div class="flex justify-between">
        <span>Shipping</span><span class="text-gray-700 tabular-nums">+{{ shippingPrice }}</span>
      </div>
      <!--Transition name="scale-y" mode="out-in">
        <div class="flex justify-between">
          <span>Discount</span><span class="text-primary tabular-nums">- {{ cart.subtotal }}</span>
        </div>
      </!--Transition-->
      <div class="flex justify-between mt-4">
        <span>Total</span><span class="text-lg font-bold text-gray-700 tabular-nums">{{ totalSum + shippingPrice }}</span>
      </div>
    </div>

    <slot></slot>


  </aside>
</template>
