<script setup lang="ts">
const props = defineProps(['data'])

</script>

<template>
  <div class="flex text-sm leading-none text-gray-400 gap-1 items-center">
    <span>
      <NuxtLink to="/" class="hover:text-primary">Home</NuxtLink>

    </span>
    <span v-for="(link, i) in props.data" :key="i">
      <span> /</span>
      <NuxtLink :to="link.to" class="hover:text-primary">{{ link.name }}</NuxtLink>

    </span>
  </div>
</template>
