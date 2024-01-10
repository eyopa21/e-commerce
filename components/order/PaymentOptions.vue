<script setup>
const emit = defineEmits(['payment'])
const selected = ref(null)

const paymentOptions = ref([{
  icon: 'ion:card-outline',
  name: 'Bank'
},
{
  icon: 'ion:logo-paypal',
  name: 'Paypal'
},
{
  icon: 'ion:cash-outline',
  name: 'Cash on delivery'
}])
</script>

<template>
  <div class="grid gap-4 leading-tight payment-options">
    <div v-for="(i, key) in paymentOptions" :key="key" class="option" :class="{ 'active-option': selected == key }"
      @click="selected = key; emit('payment', paymentOptions[selected].name)">
      <icon :name="i.icon" size="20" class="text-gray-600" />

      <span>{{ i.name }}</span>
      <icon name="ion:checkmark-circle" size="20" class="ml-auto text-primary checkmark" />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.payment-options {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.payment-options .option {
  @apply bg-white border rounded-lg cursor-pointer flex w-full py-3 px-4 gap-2 items-center hover:border-purple-300;
}

.payment-options .active-option {
  @apply border-primary cursor-default border-opacity-50 shadow-sm;
  pointer-events: none;
}

.payment-options .option .checkmark {
  opacity: 0;
}

.payment-options .active-option .checkmark {
  opacity: 1;
}
</style>
