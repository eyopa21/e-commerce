
<script setup>
const { search } = useSearch();
const searchQuery = ref('')

const Search = () => {
    search(searchQuery.value)
}
</script>


<template>
    <form class="relative items-center flex-1 -space-x-px rounded-md shadow-sm">
        <Icon name="ion:search-outline" size="20" class="absolute z-10 opacity-50 pointer-events-none left-2" />
        <input v-model="searchQuery" type="text" placeholder="Search products" @input="Search"
            class="z-0 inline-flex items-center w-full p-2 pl-10 text-sm text-gray-500 border border-gray-300 rounded-md shadow-inner outline-none bg-gray-50 shadow-gray-200" />
        <span v-if="searchQuery" @click="searchQuery = ''"
            class="absolute z-10 flex items-center gap-1 px-2 py-1 text-xs rounded cursor-pointer bg-primary bg-opacity-10 text-primary right-2">
            <span>Clear</span>
            <Icon name="ion:close-outline" size="18" />
        </span>
    </form>
</template>
  