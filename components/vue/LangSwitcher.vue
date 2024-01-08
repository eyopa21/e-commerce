
<script setup>



const langs = ['English', 'Amharic', 'Affan oromo', 'Tigrigna']
const selected = ref(langs[0])


</script>
<template>
    <div>
        <USelectMenu v-slot="{ open }" v-model="selected" :options="langs" class=" w-32 font-normal z-30">
            <UButton color="gray" class="flex-1 justify-between py-2 rounded-l-none text-normal">
                {{ selected }}

                <UIcon name="i-heroicons-chevron-right-20-solid"
                    class="w-5 h-5 transition-transform text-gray-400 dark:text-gray-500"
                    :class="[open && 'transform rotate-90']" />
            </UButton>
        </USelectMenu>
    </div>
</template>