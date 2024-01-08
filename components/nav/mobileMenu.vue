
<script setup>
const layout = useLayout();
</script>
<template>
    <div class="bg-white flex flex-col max-w-lg shadow-lg top-0 bottom-0 left-0 w-11/12 z-50 fixed overflow-x-hidden">
        <span @click="layout.showSidebar = false" class="bg-white rounded-xl shadow-xl p-1.5"> <svg
                class="cursor-pointer top-6 left-8 absolute" xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                viewBox="0 0 512 512">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"
                    d="M368 368L144 144M368 144L144 368" />
            </svg></span>


        <div class="mt-8 text-center">Menu</div>
        <nav @click="layout.showSidebar = false" class="m-4 grid p-4 text-gray-500 gap-6">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/products">Products</NuxtLink>
            <NuxtLink to="/categories">Category</NuxtLink>


            <NuxtLink class="lg:hidden" to="/wishlist" :prefetch="false">Wishlist</NuxtLink>
            <NuxtLink class="lg:hidden" to="/my-account" :prefetch="false">My Account</NuxtLink>
        </nav>

        <div class="mt-auto text-center p-8 text-[10px] text-gray-400 uppercase">
            <a href="/" title="wooNuxtVersionInfo">Version101</a>
        </div>
    </div>
</template>