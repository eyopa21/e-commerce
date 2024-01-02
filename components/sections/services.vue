<template>
    <section class="container grid gap-4 my-24 md:grid-cols-2 lg:grid-cols-4">
        <div v-for="i in 4" :key="i" class="flex items-center gap-8 p-8 bg-white rounded-lg">
            <NuxtImg src="/svg.svg" width="60" height="60" alt="Free Shipping" loading="lazy" />
            <div>
                <h3 class="text-xl font-semibold">Free Shipping</h3>
                <p class="text-sm">Free shipping on order over €50</p>
            </div>
        </div>

    </section>
</template>