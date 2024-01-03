<template>
  <form class="bg-white rounded-lg shadow" @submit.prevent="saveChanges">
    <div class="grid p-8 gap-6 md:grid-cols-2">
      <h3 class="font-semibold text-xl col-span-full">Billing</h3>

      <div class="w-full">
        <label for="first-name">First name</label>
        <input placeholder="John" type="text" required />
      </div>

      <div class="w-full">
        <label for="last-name">Last name</label>
        <input placeholder="Doe" type="text" required />
      </div>

      <div class="w-full">
        <label for="billing-phone">Phone</label>
        <input type="tel" />
      </div>

      <div class="w-full">
        <label for="billing-company">Company</label>
        <input type="text" />
      </div>

      <div class="w-full">
        <label for="billing-address">Address1</label>
        <input placeholder="123 Main St" type="text" />
      </div>

      <div class="w-full">
        <label for="billing-address-2">Address2</label>
        <input placeholder="Apartment, studio, or floor" type="text" />
      </div>

      <div class="w-full">
        <label for="billing-city">City</label>
        <input placeholder="New York" type="text" />
      </div>

      <!--div class="w-full">
        <label for="billing-state">State</label>
        <LazyStateSelect :default-value="customer.billing.state" :country-code="customer.billing.country" />
      </!--div>

      <div-- class="w-full">
        <label for="country">Country</label>
        <LazyCountrySelect :default-value="customer.billing.country" :allowed-countries="allowedCountries" />
      </div-->

      <div class="w-full">
        <label for="billing-zip">Zip code</label>
        <input placeholder="10001" type="text" />
      </div>

      <div class="w-full col-span-full">
        <label for="email">Email</label>
        <input placeholder="johndoe@email.com" type="email" required />
      </div>
    </div>

    <div class="grid p-8 gap-6 md:grid-cols-2">
      <h3 class="font-semibold text-xl col-span-full">Shipping</h3>

      <div class="w-full">
        <label for="first-name">First name</label>
        <input placeholder="John" type="text" required />
      </div>

      <div class="w-full">
        <label for="last-name">Last name</label>
        <input placeholder="Doe" type="text" required />
      </div>

      <div class="w-full">
        <label for="billing-phone">Phone</label>
        <input type="tel" />
      </div>

      <div class="w-full">
        <label for="billing-company">Company</label>
        <input type="text" />
      </div>

      <div class="w-full">
        <label for="billing-address">Address1</label>
        <input placeholder="123 Main St" type="text" />
      </div>

      <div class="w-full">
        <label for="billing-address-2">Address2</label>
        <input placeholder="Apartment, studio, or floor" type="text" />
      </div>

      <div class="w-full">
        <label for="billing-city">City</label>
        <input placeholder="New York" type="text" />
      </div>

      <!--div class="w-full">
        <label for="billing-state">State</label>
        <LazyStateSelect :default-value="customer.shipping.state" :country-code="customer.shipping.country" />
      </!--div>

      <div-- class="w-full">
        <label for="country">Country</label>
        <LazyCountrySelect :default-value="customer.shipping.country" :allowed-countries="allowedCountries" />
      </div-->

      <div class="w-full">
        <label for="billing-zip">Zip code</label>
        <input placeholder="10001" type="text" />
      </div>
    </div>

    <div class="bg-white backdrop-blur-sm bg-opacity-75 border-t col-span-full p-4 sticky bottom-0 rounded-b-lg">
      <button class="rounded-md flex font-semibold bg-primary ml-auto text-white py-2 px-4 gap-4 items-center">
        <LoadingIcon v-if="loading" color="#fff" size="20" />
        <span>{{ buttonText }}</span>
      </button>
    </div>
  </form>
</template>

<script setup>


const loading = ref(false);
const buttonText = computed(() => (loading.value ? 'Updating...' : 'Update Details'));

async function saveChanges() {
  console.log("save")
}
</script>
