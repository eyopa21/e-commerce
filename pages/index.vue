<script setup>

useHead({
    title: `Home | GEbeya`,
    meta: [{ name: 'description', content: 'The best ecommerce store in the world' }],
    link: [{ rel: 'canonical', href: 'https://eyoba-blog.netlify.app' }],
});
</script>

<template>
    <main>
        <SectionsHero />
        <div
            class="container flex flex-wrap items-center justify-center my-16 text-center gap-x-8 gap-y-4 brand lg:justify-between">
            <NuxtImg src="/images/logoipsum-211.svg" alt="Brand 1" width="132" height="35" />
            <NuxtImg src="/images/logoipsum-221.svg" alt="Brand 2" width="119" height="30" />
            <NuxtImg src="/images/logoipsum-225.svg" alt="Brand 3" width="49" height="48" />
            <NuxtImg src="/images/logoipsum-280.svg" alt="Brand 4" width="78" height="30" />
            <NuxtImg src="/images/logoipsum-284.svg" alt="Brand 5" width="70" height="44" />
            <NuxtImg src="/images/logoipsum-215.svg" alt="Brand 6" width="132" height="40" />
        </div>

    </main>
</template>