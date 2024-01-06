
<script setup>
import query from '../../queries/get/get-products.gql'
const products = ref([])

const { onResult, onError, loading } = useQuery(query, { fetchPolicy: 'no-cache', })

onResult(res => {
    console.log("res", res.data.products)
    products.value = res.data.products
})
onError(err => {
    console.log("err", err)
})
</script>


<template>
    <Transition name="fade" mode="out-in">
        <section class="relative w-full">
            <TransitionGroup v-if="loading" name="shrink" tag="div" mode="in-out" class="product-grid">
                <div class="grid grid-cols-4 gap-3">

                    <VueSkeleton v-for="(i, key) in 12" :key="key" />
                </div>
            </TransitionGroup>
            <TransitionGroup v-else name="shrink" tag="div" mode="in-out" class="product-grid">
                <ProductCard v-for="(i, key) in products" :key="key" :product="i" :index="key" />
            </TransitionGroup>
            <Pagination />

        </section>
        <!--NoProductsFound /-->
    </Transition>
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
