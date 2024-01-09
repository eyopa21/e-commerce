<script setup>
const layout = useLayout()
const colorMode = useColorMode()
const isDark = computed({
    get() {
        return colorMode.value === 'dark'
    },
    set() {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
})
</script>
<template>
    <div>
        <LazyNavHeader />
        <VueAlert />
        <Transition name="slide-from-right">
            <Cart v-if="layout.showCart" />
        </Transition>
        <Transition name="slide-from-left">
            <NavMobileMenu v-if="layout.showSidebar" />
        </Transition>
        <Transition name="fade">
            <div v-if="layout.showCart || layout.showSidebar" class="bg-black opacity-25 inset-0 z-40 fixed"
                @click="layout.showCart = false; layout.showSidebar = false"></div>
        </Transition>
        <div>

            <slot />
        </div>

        <Transition>

            <LazyNavFooter />
        </Transition>
        <!-- Back to Top & Light/Dark Toggle -->
        <!--div class="fixed lg:bottom-5 end-5 bottom-18 flex flex-col items-center bg-primary/25 rounded-full z-10">
            <ClientOnly>
                <UButton :icon="isDark ? 'i-heroicons-sun-20-solid' : 'i-heroicons-moon-20-solid'" color="gray"
                    variant="ghost" aria-label="Theme" @click="isDark = !isDark" />

                <template #fallback>
                    <div class="w-8 h-8 bg-primary rounded-full" />
                </template>
            </ClientOnly>
        </!--div-->


    </div>
</template>