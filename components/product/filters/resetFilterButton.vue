
<script setup>
const { resetFilter } = useFiltering();
const ResetFilter = async () => {
    console.log("reset filter")
    await resetFilter();
}
</script>

<template>
    <button class=" mt-96 bg-primary rounded-lg font-bold  text-center text-white text-sm w-full p-2" @click="ResetFilter">
        Clear filters
    </button>
</template>