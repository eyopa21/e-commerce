<script setup>
const { addToWishlist, removeFromWishlist, isInList } = useWishlist();

const props = defineProps(['product'])



const toggleWishlist = () => {

  addToWishlist(props.product);
}



</script>

<template>
  <button type="button" class="cursor-pointer flex mt-4 text-sm text-gray-400 gap-2 items-center" @click="toggleWishlist">
    <Icon name="ion:heart" size="18" class="text-red-400" />

    <span>hello</span>
  </button>
</template>