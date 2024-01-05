
<script setup>
const props = defineProps(['product'])
</script>

<template>
    <div class="relative product-card">
        <NuxtLink :to="`/product/1`" :title="props.product.name">
            <VueSaleBadge :node="node" class="absolute top-2 right-2" />
            <!--img v-if="colorVariableImage" :src="colorVariableImage" :alt="node.image?.altText || node.name"
                :title="node.image?.title || node.name" :loading="index <= 3 ? 'eager' : 'lazy'" /-->
            <NuxtImg :width="imgWidth" :height="imgHeight" :src="props.product.image || '/placeholder.jpg'"
                alt="image product" :title="props.product.name" :loading="index <= 3 ? 'eager' : 'lazy'" fit="outside"
                format="webp" densities="x1 x2" />
        </NuxtLink>
        <div class="p-2">
            <VueStarRating :rating="5" :count="2" />
            <NuxtLink :to="`/product/1`" :title="props.product.name">
                <h2 class="mb-2 font-light leading-tight">{{ props.product.name }}</h2>
            </NuxtLink>

            <div class="text-sm">
                <div class="flex">
                    <span class="font-semibold ml-2"> salePrice</span>
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