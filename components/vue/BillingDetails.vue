<script setup>

const props = defineProps({
  modelValue: { type: Object, required: true },
  sameAsShippingAddress: { type: Boolean, default: true },
});

const billing = toRef(props, 'modelValue');
</script>

<template>
  <div class="grid w-full gap-4 lg:grid-cols-2">
    <div class="w-full">
      <label for="first-name">First name</label>
      <input placeholder="John" type="text" required />
    </div>

    <div class="w-full">
      <label for="last-name">Last name</label>
      <input placeholder="Doe" type="text" required />
    </div>

    <div class="w-full col-span-full">
      <label for="address1">Address1</label>
      <input placeholder="Mexico street" type="text" required />
    </div>

    <div class="w-full col-span-full">
      <label for="address2">Address2</label>
      <input placeholder="Addis ababa" type="text" />
    </div>

    <div class="w-full">
      <label for="city">City</label>
      <input placeholder="Addis ababa" type="text" required />
    </div>

    <!--div class="w-full">
      <label for="country">County</label>
      <LazyStateSelect v-model="billing.state" :default-value="billing.state" :country-code="billing.country"
        @change="updateShippingLocation" />
    </!--div>

    <div class="w-full">
      <label for="country">{{ $t('messages.billing.country') }}</label>
      <LazyCountrySelect v-model="billing.country" :default-value="billing.country" :allowed-countries="allowedCountries"
        @change="updateShippingLocation" />
    </div>

    <div class="w-full">
      <label for="zip">ZIP ({{ $t('messages.general.optional') }})</label>
      <input v-model="billing.postcode" placeholder="D01 1234" type="text" required />
    </div>

    <div-- class="w-full col-span-full">
      <label for="phone">{{ $t('messages.billing.phone') }} ({{ $t('messages.general.optional') }})</label>
      <input v-model="billing.phone" placeholder="+353871234567" type="tel" />
    </div-->
  </div>
</template>
