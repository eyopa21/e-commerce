<script setup>
const { removeFromWishlist } = useWishlist();

const props = defineProps(['product']);
console.log("proppp", props.product)
</script>
<template>
    <li class="flex py-4 gap-4 items-center">
        <button title="Remove Item" @click="removeFromWishlist(0)">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"
                    d="M368 368L144 144M368 144L144 368" />
            </svg>
        </button>
        <NuxtLink :to="`/product/1`">
            <img class="rounded-lg object-cover h-20 w-20" :src="props.product.images[0] || '/placeholder.jpg'"
                alt="whishlist image" title="Whishlist item" width="100" height="120" />
        </NuxtLink>
        <NuxtLink class="text-lg leading-tight" :to="`/product/1`">{{ props.product.title }}</NuxtLink>

        <div class="ml-auto">
            <div class="flex">
                <span class="font-semibold" />
                <span class="font-semibold ml-2">{{ props.product.price }}$</span>
            </div>
        </div>
    </li>
</template>
