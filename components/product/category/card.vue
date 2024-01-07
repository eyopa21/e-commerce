<script setup>
const props = defineProps(['node'])

</script>

<template>
    <NuxtLink to="/product-category/clothing"
        class="group hover:scale-[102%] relative flex justify-center overflow-hidden border border-white rounded-xl item snap-mandatory snap-x transition-all duration-300">
        <NuxtImg provider="cloudinary" quality="100" class="absolute inset-0 object-cover w-full h-full"
            :src="props.node.image?.split('upload')[1] ? props.node.image?.split('upload')[1] : '/placeholder.jpg'"
            alt="category" :title="props.node.title" loading="lazy" fit="inside" format="webp" densities="x1 x2"
            placeholder />
        <div class="absolute inset-x-0 bottom-0 opacity-50 bg-gradient-to-t from-black to-transparent h-1/2" />
        <span
            class="group-hover:underline underline-offset-2 group-hover:scale-110: relative z-10 mt-auto mb-2 text-sm font-semibold text-white capitalize md:text-base md:mb-4">{{
                node.name }}</span>
    </NuxtLink>
</template>

<style lang="postcss" scoped>
.item {
    scroll-snap-align: start;
    scroll-snap-stop: always;
    aspect-ratio: 4 / 5;
}
</style>
