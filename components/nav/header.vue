
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
                <NuxtLink to="/">

                    <h3 class="md:w-[160px]">LOGO</h3>
                </NuxtLink>
            </div>
            <nav class="items-center hidden gap-6 text-sm text-gray-500 lg:flex lg:px-4">
                <NuxtLink to="/" class="hover:border-b-2 border-primary" active-class="text-primary">Home</NuxtLink>
                <NuxtLink to="/products" class="hover:border-b-2 border-primary" active-class="text-primary">Products
                </NuxtLink>
                <NuxtLink to="/categories" class="hover:border-b-2 border-primary" active-class="text-primary">Categories
                </NuxtLink>
                <NuxtLink to="/contact" class="hover:border-b-2 border-primary" active-class="text-primary">Contact
                </NuxtLink>

                <NuxtLink class="lg:hidden hover:border-b-2 border-primary" to="/wishlist" :prefetch="false"
                    active-class="text-primary">Wishlist</NuxtLink>
                <NuxtLink class="lg:hidden hover:border-b-2 border-primary" to="/auth/login" :prefetch="false"
                    active-class="text-primary">My Account
                </NuxtLink>
            </nav>

            <div class="flex gap-4 justify-end items-center md:w-[160px] flex-1 ml-auto">
                <ProductSearch class="hidden sm:inline-flex max-w-[320px] w-[60%]" />
                <div class="relative cursor-pointer sm:hidden" title="Cart" @click="layout.showSearch = !layout.showSearch">
                    <Icon name="ion:search-outline" size="20" class="mr-1 md:mr-0" />
                </div>
                <NuxtLink to="/wishlist" title="Wishlist" class="hover:border-b-2 border-primary"
                    active-class="text-primary">
                    <Icon name="ion:heart-outline" size="20" />
                </NuxtLink>
                <NuxtLink to="/my-account" title="Account" class="hover:border-b-2 border-primary"
                    active-class="text-primary">
                    <Icon name="ion:person-outline" size="20" />
                </NuxtLink>
                <CartToggleCart class="hover:border-b-2 border-primary" />
            </div>
        </div>
        <Transition name="scale-y" mode="out-in">
            <div v-if="layout.showSearch" class="container mb-3 -mt-1 sm:hidden">
                <ProductSearch class="flex w-full" />
            </div>
        </Transition>
    </header>
</template>
