
<script setup>
const resetFilter = () => {
    console.log("reset filter")
}
</script>

<template>
    <button class=" mt-96 bg-primary rounded-lg font-bold  text-center text-white text-sm w-full p-2" @click="resetFilter">
        Clear filters
    </button>
</template>