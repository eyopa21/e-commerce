<script setup>
const layout = useLayout()
</script>

<template>
    <div>

        <UModal v-model="layout.showModal" prevent-close>
            <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
                <template #header>
                    <div class="flex items-center justify-between">
                        <h3 class=" text-xl font-semibold leading-6 text-red-500 dark:text-white">
                            Alert
                        </h3>
                        <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                            @click="layout.showModal = false" />
                    </div>
                </template>


                <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                    enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                    leave-to="opacity-0 scale-95">
                    <div
                        class="w-full max-w-md transform overflow-hidden rounded-2xl  text-left align-middle  transition-all">
                        <div class="text-lg font-medium leading-6 text-gray-900">
                            Payment successful
                        </div>
                        <div class="mt-2">
                            <p class="text-sm text-gray-500">
                                Your payment has been successfully submitted. We’ve sent you
                                an email with all of the details of your order.
                            </p>
                        </div>

                        <div class="mt-4">
                            <button type="button"
                                class="inline-flex justify-center rounded-md border border-transparent bg-primary-100 px-4 py-2 text-sm font-medium text-primary hover:bg-primary-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                @click="closeModal">
                                Got it, thanks!
                            </button>
                        </div>
                    </div>
                </TransitionChild>

            </UCard>
        </UModal>


    </div>
</template>

