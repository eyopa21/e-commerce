<script setup>
const currentUser = useCurrentUser()
</script>

<template>
  <div v-if="currentUser.currentUser" class="grid gap-8 account-form">
    <AccountPersonalInfo />
    <AccountBillingAndShipping />
    <AccountChangePassword />
  </div>
</template>

<style lang="postcss">
.account-form input[type='text'],
.account-form input[type='email'],
.account-form input[type='tel'],
.account-form input[type='password'],
.account-form textarea,
.account-form .StripeElement,
.account-form select {
  @apply bg-white border rounded-md outline-none w-full py-2 px-4 block md:bg-gray-50;
}

.account-form label {
  @apply text-xs mb-1 text-gray-600 inline-block uppercase;
}
</style>
