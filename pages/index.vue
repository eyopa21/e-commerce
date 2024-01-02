<script setup>



useHead({
    title: `Home | GEbeya`,
    meta: [{ name: 'description', content: 'The best ecommerce store in the world' }],
    link: [{ rel: 'canonical', href: 'https://eyoba-blog.netlify.app' }],
});
</script>

<template>
    <main class="">
        <SectionsHero />
        <SectionsCompanies />
        <SectionsCategories />
        <SectionsServices />
    </main>
</template>

<style scoped>
.brand img {
    max-height: min(8vw, 120px);
    object-fit: contain;
    object-position: center;
}
</style>
