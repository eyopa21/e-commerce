<script setup>
const { altImage } = useHelpers()
const props = defineProps(['item'])
const router = useRouter();
const layout = useLayout();
const { removeItem } = useCart();

const remove = async (id) => {
    console.log("removing")
    try {
        await removeItem(id);
    } catch (err) {
        console.log("errrrrr", err)
    }
}

const quantity = ref(props.item.quantity)


const navigate = () => {
    router.push(`/product/${props.item.product.id}`)
    layout.value.showCart = false

}
</script>

<template>
    <div>
        <li class="flex items-center gap-3">
            <NuxtLink @click="navigate()">

                <NuxtImg provider="cloudinary" :src="props.item.product.images[0]?.split('upload')[1] || altImage"
                    width="64" height="64" class="w-16 h-16 rounded-md" alt="alt"
                    title="productType.image?.title || productType.name" loading="lazy" />
            </NuxtLink>
            <div class="flex-1">
                <NuxtLink @click="navigate()" class="leading-tight"> {{
                    props.item.product.title }}
                </NuxtLink>
                <div class="mt-1 text-xs">
                    <div class="flex">

                        <span class="font-semibold ml-2">{{ props.item.product.price }}$</span>
                    </div>
                </div>


            </div>
            <input v-model.number="quantity" type="number" min="0" aria-label="Quantity"
                class="flex items-center justify-center w-16 gap-4 p-2 text-left bg-white border rounded-md focus:outline-none"
                @input="updateQuantity" />
            <button title="Remove Item" aria-label="Remove Item" @click="remove(props.item.id)" type="button">
                <Icon name="ion:close-outline" class="inline-block hover:text-red-500 cursor-pointer p-1.5" size="34" />
            </button>
        </li>
    </div>
</template>

<style scoped lang="postcss">
/* alwsys show up and down buttons on number inpout */
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
    opacity: 1;
}
</style>
