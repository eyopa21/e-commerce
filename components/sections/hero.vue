
<script setup>
const hero = ref('https://res.cloudinary.com/doifglnsi/image/upload/v1704558683/hero-3_xhinck.jpg')


</script>

<template>
    <div class="relative mx-auto ">
        <NuxtImg provider="cloudinary" width="1400" height="800" placeholder
            class="object-cover w-full h-[420px] lg:h-[560px] xl:h-[640px]"
            :src="hero?.split('upload')[1] ? hero?.split('upload')[1] : '/hero-3.jpg'" alt="Hero image" loading="eager"
            format="webp" fit="outside" sizes="sm:100vw lg:100%" fetchpriority="high" preload />
        <div
            class="container absolute inset-0 flex flex-col items-start justify-center text-gray-100 bg-gradient-to-l from-gray-800 md:bg-none p-8">
            <h1 class="text-3xl font-bold md:mb-4 md:text-4xl lg:text-6xl">Welcome</h1>
            <h2 class="text-lg font-bold md:mb-4 lg:text-3xl">The Christmas Collection</h2>
            <div class="max-w-sm mb-8 text-md font-light lg:max-w-md text-black">
                <p>Our Christmas collection is here! We have a wide range of products to make your Christmas extra special.
                </p>
            </div>
            <NuxtLink class="px-6 py-3 font-bold text-white bg-primary-600 rounded-xl hover:bg-gray-800" to="/products">Shop
                now</NuxtLink>
        </div>
    </div>
</template>

