<template>
    <div>

        <footer class="bg-white p-2">
            <div class="container flex flex-wrap justify-between gap-12 my-24 md:gap-24">
                <div class="mr-auto">
                    <span>LOGO</span>
                    <p class="mt-4 text-sm text-gray-700 xl:max-w-md">
                        Job Commerce is unmatched when it comes to performance and scalability. Reap the benefits of
                        having
                        a
                        online
                        store that out performs all of your competitors. You can edit components
                        to display your own information just like the one you're reading now.
                    </p>
                    <VueLangSwitcher class="mt-8" />

                </div>
                <div class="w-3/7 lg:w-auto">
                    <div class="mb-1 font-semibold">Links</div>
                    <div class="text-sm">
                        <NuxtLink to="/" class="py-1.5 block" target="_blank">Home</NuxtLink>
                        <NuxtLink to="/products" class="py-1.5 block">Products</NuxtLink>
                        <NuxtLink to="/categories" class="py-1.5 block">Categories</NuxtLink>
                        <NuxtLink class="py-1.5 block" rel="noreferrer">FAQ's</NuxtLink>
                    </div>
                </div>
                <div class="w-3/7 lg:w-auto">
                    <div class="mb-1 font-semibold">Products</div>
                    <div class="text-sm">
                        <NuxtLink to="/products" class="py-1.5 block">newArrivals</NuxtLink>
                        <NuxtLink class="py-1.5 block">On sale</NuxtLink>
                        <NuxtLink class="py-1.5 block">Top rated
                        </NuxtLink>
                        <a href="/" class="py-1.5 block">messages.shop.giftCards</a>
                    </div>
                </div>
                <div class="w-3/7 lg:w-auto">
                    <div class="mb-1 font-semibold">customerService</div>
                    <div class="text-sm">
                        <NuxtLink to="/contact" class="py-1.5 block">Contact Us</NuxtLink>
                        <a href="/" class="py-1.5 block">Shipping & Returns</a>
                        <a href="/" class="py-1.5 block">Privacy Policy</a>
                        <a href="/" class="py-1.5 block">Terms & Conditions</a>
                    </div>
                </div>

            </div>
            <div class="container border-t">
                <div class="copywrite">
                    <p class="py-4 text-xs text-center">
                        <a href="https://eyoba-blog.netlify.app" target="_blank" title="versionInfo">version 101 </a> -
                        by
                        <a href="https://eyoba-blog.netlify.app" target="_blank" title="Eyob Nigussie">Eyob Nigussie</a>
                    </p>
                </div>
            </div>
        </footer>
    </div>
</template>

<style scoped lang="postcss">
a {
    @layer @apply hover: underline cursor-pointer;
}
</style>