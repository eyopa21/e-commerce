
<script setup>
import query from '../../queries/get/get-products.gql'
const layout = useLayout();
const mainData = useData();
const route = useRoute()

const products = ref(computed(() => {
    return mainData.value.products;
}))

const isEmpty = ref(computed(() => {
    if (layout.value.isFiltering) return false
    if (products.value?.length) return false
    return true
}))
</script>


<template>
    <div>


        <Transition name="fade" mode="out-in">
            <section class="relative w-full">

                <div v-if="isEmpty">
                    <VueNoProductsFound
                        message="Could not fecth products from your store. Please check your configuration." />
                </div>
                <div v-if="layout.isFiltering">

                    <TransitionGroup name="shrink" tag="div" mode="in-out" class="">
                        <div class="grid grid-cols-4 gap-3 product-grid">

                            <VueSkeleton v-for="(i, key) in 12" :key="key" />
                        </div>
                    </TransitionGroup>
                </div>

                <TransitionGroup name="shrink" tag="div" mode="out-in" class="product-grid">

                    <ProductCard v-for="(i, key) in products" :key="key" :product="i" :index="key" />

                </TransitionGroup>

                <VuePagination v-if="route.name === 'products'" />

            </section>



        </Transition>

    </div>
</template>

<style lang="postcss" scoped>
.product-grid {
    @apply my-4 min-h-[600px] grid transition-all gap-8 lg:my-8;

    grid-template-columns: repeat(2, 1fr);
}

.product-grid:empty {
    display: none;
}

@media (min-width: 768px) {
    .product-grid {
        grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    }
}

.shrink-move {
    transition: all 400ms;
}

.shrink-leave-active {
    transition: transform 300ms;
    position: absolute;
    opacity: 0;
}

.shrink-enter-active {
    transition:
        opacity 400ms ease-out 200ms,
        transform 400ms ease-out;
    will-change: opacity, transform;
}

.shrink-enter,
.shrink-leave-to,
.shrink-enter-from {
    opacity: 0;
    transform: scale(0.75) translateY(25%);
}
</style>
