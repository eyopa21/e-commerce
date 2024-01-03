
<script setup>
const layout = useLayout()
</script>
<template>
    <header class="sticky top-0 z-40 bg-white shadow-sm shadow-light-500 -ml-2">
        <div class="container flex items-center justify-between py-4">
            <div class="flex items-center">
                <span class="block md:hidden">

                    <Icon name="ion:menu-outline" size="26" class=" mr-4 cursor-pointer"
                        @click="layout.showSidebar = true" />
                </span>
                <h3 class="md:w-[160px]">LOGO</h3>
            </div>
            <nav class="items-center hidden gap-6 text-sm text-gray-500 lg:flex lg:px-4">
                <NuxtLink to="/">Home</NuxtLink>
                <NuxtLink to="/products">Products</NuxtLink>
                <NuxtLink to="/categories">Categories</NuxtLink>
                <NuxtLink to="/contact">Contact</NuxtLink>

                <NuxtLink class="lg:hidden" to="/wishlist" :prefetch="false">Wishlist</NuxtLink>
                <NuxtLink class="lg:hidden" to="/auth/login" :prefetch="false">My Account</NuxtLink>
            </nav>

            <div class="flex gap-4 justify-end items-center md:w-[160px] flex-1 ml-auto">
                <ProductSearch class="hidden sm:inline-flex max-w-[320px] w-[60%]" />
                <div class="relative cursor-pointer sm:hidden" title="Cart" @click="layout.showSearch = !layout.showSearch">
                    <Icon name="ion:search-outline" size="20" class="mr-1 md:mr-0" />
                </div>
                <NuxtLink to="/wishlist" title="Wishlist">
                    <Icon name="ion:heart-outline" size="20" />
                </NuxtLink>
                <NuxtLink to="/my-account" title="Account">
                    <Icon name="ion:person-outline" size="20" />
                </NuxtLink>
                <CartToggleCart />
            </div>
        </div>
        <Transition name="scale-y" mode="out-in">
            <div v-if="layout.showSearch" class="container mb-3 -mt-1 sm:hidden">
                <ProductSearch class="flex w-full" />
            </div>
        </Transition>
    </header>
</template>
