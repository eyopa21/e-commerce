
<script setup>
const props = defineProps(['product', 'index'])
const imgWidth = 220;
const imgHeight = Math.round(imgWidth * 1.125);
</script>

<template>
    <div class="relative product-card">
        <NuxtLink :to="`/product/${props.product.id}`" :title="props.product.title">
            <VueSaleBadge class="absolute top-2 right-2" />

            <NuxtImg provider="cloudinary" :width="imgWidth" :height="imgHeight"
                :src="props.product.images[0]?.split('upload')[1] ? props.product.images[0]?.split('upload')[1] : '/placeholder.jpg'"
                alt="image product" :title="props.product.name" :loading="props.index <= 3 ? 'eager' : 'lazy'" fit="outside"
                format="webp" densities="x1 x2" class="object-cover" />
        </NuxtLink>
        <div class="p-2">
            <VueStarRating :rating="5" :count="2" />
            <NuxtLink :to="`/product/${props.product.id}`" :title="props.product.title">
                <h2 class="mb-2 font-light leading-tight">{{ props.product.title }}</h2>
            </NuxtLink>

            <div class="text-sm">
                <div class="flex">
                    <span class="font-semibold ">{{ props.product.price }}$</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="postcss">
.product-card img {
    @apply rounded-lg object-top object-cover w-full;
    aspect-ratio: 1/1.125;
}

.product-card:hover {
    h2 {
        @apply text-primary;
    }
}
</style>