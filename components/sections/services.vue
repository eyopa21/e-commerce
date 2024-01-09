<script setup>
const services = ref([
    {
        title: 'Quality Product',
        description: 'Beand new quality product',
        icon: '/icons/moneyback.svg'
    },
    {
        title: 'Fair price',
        description: 'Affordable price for all of our product',
        icon: '/icons/shield.svg'
    },
    {
        title: 'Free Shipping',
        description: 'Free shipping for 3 or more orders over 5000 birr',
        icon: '/icons/box.svg'
    },
    {
        title: 'Support 24/7',
        description: '24/7 Online support',
        icon: 'icons/support.svg'
    }
])

</script>
<template>
    <section class="container grid gap-4 my-24 md:grid-cols-2 lg:grid-cols-4">
        <div v-for="(i, key) in services" :key="key" class="flex items-center gap-8 p-8 bg-white rounded-lg">
            <img :src="i.icon" width="60" height="60" alt="{{ i.title }}" loading="lazy" />
            <div>
                <h3 class="text-xl font-semibold">{{ i.title }}</h3>
                <p class="text-sm">{{ i.description }}</p>
            </div>
        </div>

    </section>
</template>

