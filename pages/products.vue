<script setup>
const { removeBodyClass, toggleBodyClass } = useHelpers();
const layout = useLayout();
const mainData = useData();
onBeforeUnmount(() => {
  removeBodyClass('show-filters');
});

useHead({
  title: 'Products',
  meta: [{ hid: 'description', name: 'description', content: 'Products' }],
});
</script>

<template>
  <div>


    <div class="container flex items-start gap-16">
      <ProductFilters />

      <div class="w-full">
        <div class="flex items-center justify-between w-full gap-4 mt-8 md:gap-8">
          <ProductResultCount />
          <ProductFiltersOrderByDropdown class="hidden md:inline-flex" />

          <div class="md:hidden">

            <div class="relative inline-flex -space-x-px shadow-sm rounded-m isolate">
              <button
                class="relative inline-flex items-center p-2 text-sm text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:z-20"
                aria-label="Show filters" @click="toggleBodyClass('show-filters')" title="Show filters">
                <Icon name="ion:funnel-outline" size="18"
                  class="transition-transform transform transform-origin-center" />
              </button>
              <span class="absolute z-20 w-2.5 h-2.5 rounded-full bg-primary -top-1 -right-1" />
            </div>

          </div>
        </div>

        <ProductGrid />
      </div>

    </div>


  </div>
</template>
