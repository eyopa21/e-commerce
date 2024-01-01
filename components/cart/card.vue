<script setup>

const props = defineProps(['item'])

console.log(props.item)
const quantity = ref(0)

</script>

<template>
    <SwipeCard @remove="removeItem">
        <li class="flex items-center gap-3">
            <NuxtLink to="/productSlug">

                <NuxtImg provider="cloudinary" src="/v1699086989/hxhsmc9ihoavcpogkyxw.jpg" width="64" height="64"
                    class="w-16 h-16 rounded-md" alt="alt" title="productType.image?.title || productType.name"
                    loading="lazy" />
            </NuxtLink>
            <div class="flex-1">
                <NuxtLink class="leading-tight" to="/productSlug"> {{ props.item.name }}</NuxtLink>
                <div class="mt-1 text-xs">
                    <div class="flex">

                        <span class="font-semibold ml-2">{{ props.item.price }}</span>
                    </div>
                </div>


            </div>
            <input v-model.number="quantity" type="number" min="0" aria-label="Quantity"
                class="flex items-center justify-center w-16 gap-4 p-2 text-left bg-white border rounded-md focus:outline-none"
                :disabled="isUpdatingCart" @input="updateQuantity" />
            <button title="Remove Item" aria-label="Remove Item" @click="removeItem" type="button">
                <Icon name="ion:close-outline" class="removeItem hover:text-red-500 cursor-pointer p-1.5" size="34" />
            </button>
        </li>
    </SwipeCard>
</template>

<style scoped lang="postcss">
/* alwsys show up and down buttons on number inpout */
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
    opacity: 1;
}

.removeItem {
    @apply hidden md:inline-block;
}
</style>
