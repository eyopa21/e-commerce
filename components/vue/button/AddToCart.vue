<script setup>

const props = defineProps({
  disabled: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
});


// stop loading when cart is updated
//watch(cart, (val) => {
//  isLoading.value = false;
//});
</script>

<template>
  <button type="submit"
    class="rounded-lg flex font-bold bg-gray-800 text-white text-center min-w-[150px] p-2.5 gap-4 items-center justify-center focus:outline-none">
    <span>Add to cart</span>
    <VueLoadingIcon v-if="props.loading" stroke="4" size="12" color="#fff" />
  </button>
</template>

<style lang="postcss" scoped>
button {
  outline: none !important;
  transition: all 150ms ease-in;
}

button.disabled {
  @apply cursor-not-allowed bg-gray-400;
}
</style>
