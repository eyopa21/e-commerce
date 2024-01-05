<script setup>
const layout = useLayout();
const { getCart } = useCart()
const currentUser = useCurrentUser();
const cartItem = ref(computed(() => {
    return currentUser.value.currentUser?.carts
}))

onMounted(async () => {

    try {
        const res = await getCart()
        console.log("cartilalala", res)
    } catch (err) {
        console.log("cart erorororo", err)
    }
})


</script>


<template>
    <div class="fixed top-0 bottom-0 right-0 z-50 flex flex-col w-11/12 max-w-lg overflow-x-hidden bg-white shadow-lg">
        <Icon name="ion:close-outline" class="absolute p-1 bg-white rounded-lg shadow-lg top-6 left-6 md:left-8" size="34"
            @click="layout.showCart = false" />
        <div v-if="cartItem?.length" class="rounded-lg shadow-lg p-1.5 hover:bg-red-400 hover:text-white">
            <button class="cursor-pointer top-6 right-6 md:right-8 absolute" title="Empty Cart" @click="emptyCart">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 512 512">
                    <path d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320" fill="none"
                        stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
                    <path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"
                        d="M80 112h352" />
                    <path
                        d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224"
                        fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="32" />
                </svg>
            </button>
        </div>


        <div class="mt-8 text-center">Cart</div>

        {{ cart }}

        <ul v-if="cartItem?.length" class="flex flex-col flex-1 gap-4 p-6 overflow-y-scroll md:p-8">
            <div v-for="(i, key) in cartItem" :key="key">
                <CartCard :item="i" />
            </div>
        </ul>
        <div v-if="cartItem?.length" class="px-8 mb-8">
            <NuxtLink
                class="block p-3 text-lg text-center text-white bg-gray-800 rounded-lg shadow-md justify-evenly hover:bg-gray-900"
                to="/checkout">
                <span class="mx-2">Checkout</span>
                <span>22$</span>
            </NuxtLink>
        </div>

        <!-- Empty Cart Message -->
        <div v-else class="flex flex-col items-center justify-center flex-1 mb-12">
            <div class="mb-20 text-xl text-gray-300">Empty cart</div>
        </div>

        <!-- Cart Loading Overlay -->
        <div v-if="isUpdatingCart" class="absolute inset-0 flex items-center justify-center bg-white bg-opacity-25">
            <LoadingIcon />
        </div>
    </div>
</template>