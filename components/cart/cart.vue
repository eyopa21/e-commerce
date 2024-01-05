<script setup>
const layout = useLayout();
const currentUser = useCurrentUser();
const cartItem = ref(currentUser.value.currentUser?.carts)




</script>


<template>
    <div class="fixed top-0 bottom-0 right-0 z-50 flex flex-col w-11/12 max-w-lg overflow-x-hidden bg-white shadow-lg">
        <Icon name="ion:close-outline" class="absolute p-1 bg-white rounded-lg shadow-lg top-6 left-6 md:left-8" size="34"
            @click="layout.showCart = false" />
        <div class="rounded-lg shadow-lg p-1.5 hover:bg-red-400 hover:text-white">
            <button class="cursor-pointer top-6 right-6 md:right-8 absolute" title="Empty Cart" @click="emptyCart">
                <TrashIcon />
            </button>
        </div>


        <div class="mt-8 text-center">Cart</div>

        {{ cart }}

        <ul class="flex flex-col flex-1 gap-4 p-6 overflow-y-scroll md:p-8">
            <div v-for="(i, key) in cartItem" :key="key">
                <CartCard :item="i" />
            </div>
        </ul>
        <div class="px-8 mb-8">
            <NuxtLink
                class="block p-3 text-lg text-center text-white bg-gray-800 rounded-lg shadow-md justify-evenly hover:bg-gray-900"
                to="/checkout">
                <span class="mx-2">Checkout</span>
                <span>22$</span>
            </NuxtLink>
        </div>

        <!-- Empty Cart Message -->
        <div class="flex flex-col items-center justify-center flex-1 mb-12">
            <div class="mb-20 text-xl text-gray-300">Empty cart</div>
        </div>

        <!-- Cart Loading Overlay -->
        <div v-if="isUpdatingCart" class="absolute inset-0 flex items-center justify-center bg-white bg-opacity-25">
            <LoadingIcon />
        </div>
    </div>
</template>