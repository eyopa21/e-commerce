<script setup>
const layout = useLayout()
</script>

<template>
    <div>


        <UModal v-model="layout.showModal" :overlay="true">
            <div class="p-4">
                <Placeholder class="h-48" />
                hello
            </div>
        </UModal>
    </div>
</template>

