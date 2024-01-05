<script setup>
const { addToWishlist, removeFromWishlist, isInList } = useWishlist();

const props = defineProps(['product'])


const isWishlisted = computed(() => (props.product.id ? isInList(props.product.id) : false));

const toggleWishlist = () => (isWishlisted.value ? removeFromWishlist(props.product.id) : addToWishlist(props.product));



</script>

<template>
  <button type="button" class="cursor-pointer flex mt-4 text-sm text-gray-400 gap-2 items-center" @click="toggleWishlist">

    <Transition name="fade" mode="out-in">
      <Icon v-if="isWishlisted" name="ion:heart" size="18" class="text-red-400" />
      <Icon v-else name="ion:heart-outline" size="18" />
    </Transition>
    <span>{{ isWishlisted ? 'Remove form wishlist' : 'Add to wishlist' }}</span>
  </button>
</template>
